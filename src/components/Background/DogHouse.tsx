import {
  DogHouseContainer,
  RoofLeft,
  RoofRight,
  RoofRightWall,
  WallLeft,
  WallRight,
  WallRightDoor,
} from "components/Background/styles.tsx";

function DogHouse() {
  return (
    <DogHouseContainer>
      <RoofRight>
        <RoofRightWall />
      </RoofRight>
      <WallLeft />
      <WallRight>
        <WallRightDoor />
      </WallRight>
      <RoofLeft />
    </DogHouseContainer>
  );
}

export default DogHouse;
