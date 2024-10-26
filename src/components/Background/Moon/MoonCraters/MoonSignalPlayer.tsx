import { useState } from "react";
import { SoundFilled, SoundOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { MoonSignalPlayerButton } from "components/Background/Moon/MoonCraters/styles.tsx";
import {
  TOOLTIP_PAUSED,
  TOOLTIP_PLAYING,
} from "components/Background/constants.ts";
import useAudio from "hooks/useAudio.ts";

function MoonSignalPlayer() {
  const { state, play, pause } = useAudio();
  const [tooltipTitle, setTooltipTitle] = useState(
    state.isPlaying ? TOOLTIP_PLAYING : TOOLTIP_PAUSED,
  );

  const toggleMusic = () => {
    setTooltipTitle(state.isPlaying ? TOOLTIP_PAUSED : TOOLTIP_PLAYING);
    state.isPlaying ? pause() : play();
  };

  return (
    <>
      <Tooltip placement="left" title={tooltipTitle} color="#0f1721">
        <MoonSignalPlayerButton onClick={toggleMusic} aria-label="toggle music">
          {state.isPlaying ? (
            <SoundFilled aria-label="SoundFilledIcon" />
          ) : (
            <SoundOutlined aria-label="SoundOutlinedIcon" />
          )}
        </MoonSignalPlayerButton>
      </Tooltip>
    </>
  );
}

export default MoonSignalPlayer;
