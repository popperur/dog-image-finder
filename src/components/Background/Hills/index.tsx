import {
  BackHill,
  HillContainer,
} from "components/Background/Hills/styles.tsx";
import Hill from "components/Background/Hills/Hill.tsx";
import { HILLS } from "components/Background/constants.ts";

function Hills() {
  const hillsProps = HILLS.map(([bottom, left, width, height]) => ({
    bottom,
    left,
    width,
    height,
  }));

  return (
    <HillContainer>
      {hillsProps.map((hillProps, index) => (
        <Hill key={index} {...hillProps} />
      ))}
      <BackHill />
    </HillContainer>
  );
}

export default Hills;
