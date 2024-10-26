import { audioReducer } from "context/AudioContext";

describe("audioReducer", () => {
  it("sets isPlaying to true when action type is PLAY", () => {
    const initialState = { isPlaying: false };
    const newState = audioReducer(initialState, { type: "PLAY" });
    expect(newState.isPlaying).toBe(true);
  });

  it("sets isPlaying to false when action type is PAUSE", () => {
    const initialState = { isPlaying: true };
    const newState = audioReducer(initialState, { type: "PAUSE" });
    expect(newState.isPlaying).toBe(false);
  });

  it("returns the current state when action type is unknown", () => {
    const initialState = { isPlaying: false };
    // @ts-expect-error Ignore unknown action type to test fallback
    const newState = audioReducer(initialState, { type: "UNKNOWN" });
    expect(newState).toBe(initialState);
  });
});
