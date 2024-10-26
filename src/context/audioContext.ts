import { createContext } from "react";

type AudioState = {
  isPlaying: boolean;
};

type AudioAction = { type: "PLAY" } | { type: "PAUSE" };

export const audioReducer = (
  state: AudioState,
  action: AudioAction,
): AudioState => {
  switch (action.type) {
    case "PLAY":
      return { ...state, isPlaying: true };
    case "PAUSE":
      return { ...state, isPlaying: false };
    default:
      return state;
  }
};

export const AudioContext = createContext<{
  state: AudioState;
  play: () => void;
  pause: () => void;
} | null>(null);
