import { MOON_GLOWS } from "components/Background/constants.ts";
import { MoonGlowContainer } from "components/Background/Moon/MoonGlows/styles.tsx";
import MoonGlow from "components/Background/Moon/MoonGlows/MoonGlow.tsx";

function MoonGlows() {
  const moonGlowsProps = MOON_GLOWS.map(
    ([top, left, width, height, animationDuration, animationDelay]) => ({
      top,
      left,
      width,
      height,
      animationDuration,
      animationDelay,
    }),
  );

  return (
    <MoonGlowContainer>
      {moonGlowsProps.map((moonGlowProps, index) => (
        <MoonGlow key={index} {...moonGlowProps} />
      ))}
    </MoonGlowContainer>
  );
}

export default MoonGlows;
