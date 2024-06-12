import {
  DogCollar,
  DogEyeLeft,
  DogEyeRight,
  DogEyesContainer,
  DogFace,
  DogFaceWhite,
  DogHeadContainer,
  DogHeadLeftEar,
  DogHeadRightEar,
  DogNose,
} from "components/Background/Dog/styles.tsx";
import useAnimationTimer from "hooks/useAnimationTimer.ts";

function DogHead() {
  const [keyIndex, animationDuration] = useAnimationTimer({
    initial: { duration: 2, delay: 4 },
    durationFn: () => 1.5 + Math.random() * 4,
    delayFn: () => 2 + Math.random() * 14,
  });

  return (
    <DogHeadContainer>
      <DogHeadLeftEar />
      <DogHeadRightEar />
      <DogEyesContainer
        $duration={animationDuration}
        key={`dog-eyes-container-${keyIndex}`}
      >
        <DogEyeLeft />
        <DogEyeRight />
      </DogEyesContainer>
      <DogFace>
        <DogFaceWhite
          $duration={animationDuration}
          key={`dog-face-white-${keyIndex}`}
        >
          <DogNose $duration={animationDuration} key={`dog-nose-${keyIndex}`} />
        </DogFaceWhite>
      </DogFace>
      <DogCollar />
    </DogHeadContainer>
  );
}

export default DogHead;
