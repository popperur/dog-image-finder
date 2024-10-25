import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import MoonSignalPlayer from "components/Background/Moon/MoonCraters/MoonSignalPlayer";
import { MockInstance } from "@vitest/spy";
import {
  TOOLTIP_PAUSED,
  TOOLTIP_PLAYING,
} from "components/Background/constants.ts";

describe("MoonSignalPlayer component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<MoonSignalPlayer />);

    expect(asFragment()).toMatchSnapshot();
  });

  describe("play and pause", () => {
    let playMock: MockInstance;
    let pauseMock: MockInstance;
    let moonSignalPlayerButton: HTMLDivElement;

    beforeEach(() => {
      render(<MoonSignalPlayer />);
      moonSignalPlayerButton = screen.getByRole("button", {
        hidden: true,
      });

      playMock = vi
        .spyOn(window.HTMLMediaElement.prototype, "play")
        .mockImplementation(() => Promise.resolve());
      pauseMock = vi
        .spyOn(window.HTMLMediaElement.prototype, "pause")
        .mockImplementation(() => {});
    });

    afterEach(() => {
      playMock.mockRestore();
      pauseMock.mockRestore();
    });

    it("toggles audio play/pause on signal player button click", () => {
      // Play audio
      fireEvent.click(moonSignalPlayerButton);

      expect(playMock).toHaveBeenCalled();

      // Pause audio
      fireEvent.click(moonSignalPlayerButton);

      expect(pauseMock).toHaveBeenCalled();
    });

    it("changes the icon on signal player button click", () => {
      const isSoundFilled = () => {
        return screen.queryByLabelText("SoundFilledIcon") !== null;
      };

      const isSoundOutlined = () => {
        return screen.queryByLabelText("SoundOutlinedIcon") !== null;
      };

      // Initially, the SoundOutlined should be rendered
      expect(isSoundOutlined()).toBe(true);

      // Play audio
      fireEvent.click(moonSignalPlayerButton);

      expect(isSoundFilled()).toBe(true);

      // Pause audio
      fireEvent.click(moonSignalPlayerButton);

      expect(isSoundOutlined()).toBe(true);
    });

    it("displays the correct tooltip text", async () => {
      fireEvent.mouseOver(moonSignalPlayerButton);
      await screen.findByText(TOOLTIP_PAUSED);

      // Check initial tooltip text
      expect(screen.getByText(TOOLTIP_PAUSED)).toBeInTheDocument();

      // Play audio
      fireEvent.click(moonSignalPlayerButton);
      await screen.findByText(TOOLTIP_PLAYING);

      expect(screen.getByText(TOOLTIP_PLAYING)).toBeInTheDocument();

      // Pause audio
      fireEvent.click(moonSignalPlayerButton);
      await screen.findByText(TOOLTIP_PAUSED);

      expect(screen.getByText(TOOLTIP_PAUSED)).toBeInTheDocument();
    });
  });
});
