import {
  ShootingStar,
  ShootingStarContainer,
} from "components/Background/styles.tsx";
import useAnimationTimer from "hooks/useAnimationTimer.ts";

function ShootingStars() {
  const [keyIndex, animationDuration] = useAnimationTimer({
    initial: { duration: 4, delay: 6 },
    durationFn: () => 4 + Math.random() * 4,
    delayFn: () => 6 + Math.random() * 14,
  });

  return (
    <ShootingStarContainer>
      <ShootingStar
        $duration={animationDuration}
        key={`shooting-star-${keyIndex}`}
      />
    </ShootingStarContainer>
  );
}

export default ShootingStars;
