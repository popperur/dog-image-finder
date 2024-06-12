import Star from "components/Background/Stars/Star.tsx";
import { StarContainer } from "components/Background/Stars/styles.tsx";
import { STARS } from "components/Background/constants.ts";

function Stars() {
  const starsProps = STARS.map(
    ([top, left, width, height, animationDelay]) => ({
      top,
      left,
      width,
      height,
      animationDelay,
    }),
  );

  return (
    <StarContainer>
      {starsProps.map((starProps, index) => (
        <Star key={index} {...starProps} />
      ))}
    </StarContainer>
  );
}

export default Stars;
