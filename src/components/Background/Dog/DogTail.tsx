import {
  DogTailContainer,
  DogTailLeft,
  DogTailMiddle,
  DogTailRight,
  DogTailTop,
} from "components/Background/Dog/styles.tsx";

function DogTail() {
  return (
    <DogTailContainer>
      <DogTailLeft />
      <DogTailMiddle />
      <DogTailRight />
      <DogTailTop />
    </DogTailContainer>
  );
}

export default DogTail;
