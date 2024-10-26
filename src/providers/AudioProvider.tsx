import React, { useReducer, useRef } from "react";
import { audioReducer, AudioContext } from "context/AudioContext.ts";

interface AudioProviderProps {
  children: React.ReactNode;
}

function AudioProvider({ children }: AudioProviderProps) {
  const [state, dispatch] = useReducer(audioReducer, { isPlaying: false });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = () => {
    audioRef.current?.play();
    dispatch({ type: "PLAY" });
  };

  const pause = () => {
    audioRef.current?.pause();
    dispatch({ type: "PAUSE" });
  };

  return (
    <AudioContext.Provider value={{ state, play, pause }}>
      {children}
      <audio ref={audioRef} role="audio">
        <source src="/audio/moon_signal.mp3" type="audio/mpeg" />
      </audio>
    </AudioContext.Provider>
  );
}

export default AudioProvider;
