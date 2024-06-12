import { useRef, useState } from "react";
import { SoundFilled, SoundOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { MoonSignalPlayerButton } from "components/Background/Moon/MoonCraters/styles.tsx";
import {
  TOOLTIP_PAUSED,
  TOOLTIP_PLAYING,
} from "components/Background/constants.ts";

function MoonSignalPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [tooltipTitle, setTooltipTitle] = useState(TOOLTIP_PAUSED);

  const toggleMusic = () => {
    if (audioRef.current) {
      const newPlaying = !playing;
      setPlaying(newPlaying);
      newPlaying ? audioRef.current.play() : audioRef.current.pause();
      setTooltipTitle(newPlaying ? TOOLTIP_PLAYING : TOOLTIP_PAUSED);
    }
  };

  return (
    <>
      <Tooltip placement="left" title={tooltipTitle} color="#0f1721">
        <MoonSignalPlayerButton onClick={toggleMusic}>
          {playing ? (
            <SoundFilled aria-label="SoundFilledIcon" />
          ) : (
            <SoundOutlined aria-label="SoundOutlinedIcon" />
          )}
        </MoonSignalPlayerButton>
      </Tooltip>
      <audio ref={audioRef} role="audio">
        <source src="/audio/moon_signal.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}

export default MoonSignalPlayer;
