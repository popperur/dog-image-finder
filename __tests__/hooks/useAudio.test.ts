import { renderHook } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import useAudio from "hooks/useAudio";
import AudioProvider from "providers/AudioProvider";

describe("useAudio hook", () => {
  it("throws an error if it is used outside of AudioProvider", () => {
    // Suppress the console error for this test
    const consoleErrorMock = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    expect(() => renderHook(() => useAudio())).toThrow(
      "useAudio must be used within an AudioProvider.",
    );

    consoleErrorMock.mockRestore();
  });

  it("provides access to audio state and controls when inside AudioProvider", () => {
    const { result } = renderHook(() => useAudio(), {
      wrapper: AudioProvider,
    });
    expect(result.current.state.isPlaying).toBe(false);
    expect(result.current.play).toBeInstanceOf(Function);
    expect(result.current.pause).toBeInstanceOf(Function);
  });
});
