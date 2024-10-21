import {
  BackgroundBlock,
  BackgroundContainer,
  Ground,
} from "components/Background/styles.tsx";
import DogHouse from "components/Background/DogHouse.tsx";
import ShootingStars from "components/Background/ShootingStars.tsx";
import Dog from "components/Background/Dog";
import Moon from "components/Background/Moon";
import Stars from "components/Background/Stars";
import Hills from "components/Background/Hills";

// The animated background is fetched from
// https://codepen.io/drexqq/pen/vvryLb/
// and reworked by randomizing animations and adding styled components.
// Original version: LeeSungHee <3

interface BackgroundProps {
  showElements: boolean;
}

function Background({ showElements }: BackgroundProps) {
  return (
    <BackgroundContainer>
      {showElements && (
        <BackgroundBlock>
          <Stars />
          <ShootingStars />
          <Moon />
          <Dog />
          <Hills />
          <DogHouse />
          <Ground />
        </BackgroundBlock>
      )}
    </BackgroundContainer>
  );
}

export default Background;
