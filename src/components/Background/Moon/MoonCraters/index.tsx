import {
  MoonCraterContainer,
  MoonSignalPlayerContainer,
} from "components/Background/Moon/MoonCraters/styles.tsx";
import MoonSignalPlayer from "components/Background/Moon/MoonCraters/MoonSignalPlayer.tsx";
import { MOON_CRATERS } from "components/Background/constants.ts";
import MoonCrater from "components/Background/Moon/MoonCraters/MoonCrater.tsx";

function MoonCraters() {
  const moonCratersProps = MOON_CRATERS.map(
    ([top, left, width, height, opacity]) => ({
      top,
      left,
      width,
      height,
      opacity,
    }),
  );

  return (
    <MoonCraterContainer>
      {moonCratersProps.map((moonCraterProps, index) => (
        <MoonCrater key={index} {...moonCraterProps} />
      ))}
      <MoonSignalPlayerContainer>
        <MoonSignalPlayer />
      </MoonSignalPlayerContainer>
    </MoonCraterContainer>
  );
}

export default MoonCraters;
