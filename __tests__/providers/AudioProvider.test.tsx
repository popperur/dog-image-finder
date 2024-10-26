import { render, screen, act, renderHook } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import AudioProvider from "providers/AudioProvider";
import useAudio from "hooks/useAudio";
import { MockInstance } from "@vitest/spy";

let playMock: MockInstance;
let pauseMock: MockInstance;

beforeEach(() => {
  playMock = vi
    .spyOn(HTMLMediaElement.prototype, "play")
    .mockImplementation(() => Promise.resolve());
  pauseMock = vi
    .spyOn(HTMLMediaElement.prototype, "pause")
    .mockImplementation(() => {});
});

afterEach(() => {
  vi.clearAllMocks();
  vi.restoreAllMocks();
});

describe("AudioProvider", () => {
  it("renders the audio element with correct source", () => {
    render(
      <AudioProvider>
        <div role="audioTest" />
      </AudioProvider>,
    );

    const audioElement = screen.getByRole("audio");
    expect(audioElement).toBeInTheDocument();
    const sourceElement = audioElement.querySelector("source");
    expect(sourceElement).toHaveAttribute("src", "/audio/moon_signal.mp3");
    expect(sourceElement).toHaveAttribute("type", "audio/mpeg");
  });

  it("updates state when play is called", () => {
    const { result } = renderHook(() => useAudio(), { wrapper: AudioProvider });

    act(() => {
      result.current.play();
    });

    expect(playMock).toHaveBeenCalled();
    expect(result.current.state.isPlaying).toBe(true);
  });

  it("updates state when pause is called", () => {
    const { result } = renderHook(() => useAudio(), { wrapper: AudioProvider });

    act(() => {
      result.current.play();
    });
    expect(result.current.state.isPlaying).toBe(true);

    act(() => {
      result.current.pause();
    });

    expect(pauseMock).toHaveBeenCalled();
    expect(result.current.state.isPlaying).toBe(false);
  });
});
