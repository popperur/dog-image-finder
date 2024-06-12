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

// The animated background fetched from
// https://codepen.io/drexqq/pen/vvryLb/
// and reworked to have some randomized animations with React and styled components.
// Original version: LeeSungHee <3

function Background() {
  return (
    <BackgroundContainer>
      <BackgroundBlock>
        <Stars />
        <ShootingStars />
        <Moon />
        <Dog />
        <Hills />
        <DogHouse />
        <Ground />
      </BackgroundBlock>
    </BackgroundContainer>
  );
}

export default Background;
