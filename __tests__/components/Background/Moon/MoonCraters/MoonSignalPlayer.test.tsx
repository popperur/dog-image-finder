import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import MoonSignalPlayer from "components/Background/Moon/MoonCraters/MoonSignalPlayer";
import {
  TOOLTIP_PAUSED,
  TOOLTIP_PLAYING,
} from "components/Background/constants.ts";
import useAudio from "hooks/useAudio.ts";

beforeEach(() => {
  vi.mock("hooks/useAudio.ts", () => ({
    default: vi.fn(),
  }));
});
afterEach(() => {
  vi.clearAllMocks();
});

describe("MoonSignalPlayer component", () => {
  describe("snapshot", () => {
    it("matches the snapshot", () => {
      vi.mocked(useAudio).mockReturnValue({
        state: { isPlaying: false },
        play: vi.fn(),
        pause: vi.fn(),
      });
      const { asFragment } = render(<MoonSignalPlayer />);

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("render", () => {
    it("renders with paused state initially", async () => {
      vi.mocked(useAudio).mockReturnValue({
        state: { isPlaying: false },
        play: vi.fn(),
        pause: vi.fn(),
      });

      render(<MoonSignalPlayer />);

      expect(screen.getByLabelText("toggle music")).toBeInTheDocument();
      expect(screen.getByLabelText("SoundOutlinedIcon")).toBeInTheDocument();

      const moonSignalPlayerButton = screen.getByRole("button", {
        name: /toggle music/i,
      });
      fireEvent.mouseOver(moonSignalPlayerButton);

      await waitFor(() => {
        expect(screen.getByText(TOOLTIP_PAUSED)).toBeInTheDocument();
      });
    });

    it("renders with played state initially", async () => {
      vi.mocked(useAudio).mockReturnValue({
        state: { isPlaying: true },
        play: vi.fn(),
        pause: vi.fn(),
      });

      render(<MoonSignalPlayer />);

      expect(screen.getByLabelText("toggle music")).toBeInTheDocument();
      expect(screen.getByLabelText("SoundFilledIcon")).toBeInTheDocument();

      const moonSignalPlayerButton = screen.getByRole("button", {
        name: /toggle music/i,
      });
      fireEvent.mouseOver(moonSignalPlayerButton);

      await waitFor(() => {
        expect(screen.getByText(TOOLTIP_PLAYING)).toBeInTheDocument();
      });
    });
  });

  describe("toggle music", () => {
    it("plays audio on signal player button click", async () => {
      const playMock = vi.fn();
      vi.mocked(useAudio).mockReturnValue({
        state: { isPlaying: false },
        play: playMock,
        pause: vi.fn(),
      });
      render(<MoonSignalPlayer />);

      const moonSignalPlayerButton = screen.getByRole("button", {
        name: /toggle music/i,
      });
      fireEvent.click(moonSignalPlayerButton);

      expect(playMock).toHaveBeenCalled();

      fireEvent.mouseOver(moonSignalPlayerButton);
      await waitFor(() => {
        expect(screen.getByText(TOOLTIP_PLAYING)).toBeInTheDocument();
      });
    });

    it("pauses audio on signal player button click", async () => {
      const pauseMock = vi.fn();
      vi.mocked(useAudio).mockReturnValue({
        state: { isPlaying: true },
        play: vi.fn(),
        pause: pauseMock,
      });
      render(<MoonSignalPlayer />);

      const moonSignalPlayerButton = screen.getByRole("button", {
        name: /toggle music/i,
      });
      fireEvent.click(moonSignalPlayerButton);

      expect(pauseMock).toHaveBeenCalled();

      fireEvent.mouseOver(moonSignalPlayerButton);
      await waitFor(() => {
        expect(screen.getByText(TOOLTIP_PAUSED)).toBeInTheDocument();
      });
    });
  });
});
