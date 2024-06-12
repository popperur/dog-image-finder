import {
  BackLeg,
  BackLegFoot,
  DogBackTorso,
  DogContainer,
  FrontLeftFoot,
  FrontLeftLeg,
  FrontRightFoot,
  FrontRightLeg,
} from "components/Background/Dog/styles.tsx";
import DogHead from "components/Background/Dog/DogHead.tsx";
import DogTail from "components/Background/Dog/DogTail.tsx";

function Dog() {
  return (
    <DogContainer>
      <FrontLeftLeg>
        <FrontLeftFoot />
      </FrontLeftLeg>
      <DogBackTorso />
      <DogHead />
      <DogTail />
      <BackLeg>
        <BackLegFoot />
      </BackLeg>
      <FrontRightLeg>
        <FrontRightFoot />
      </FrontRightLeg>
    </DogContainer>
  );
}

export default Dog;
