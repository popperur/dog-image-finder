import { useEffect, useState } from "react";

interface useAnimationProps {
  initial: { duration: number; delay: number };
  durationFn(): number;
  delayFn(): number;
}

function useAnimationTimer({
  initial,
  durationFn,
  delayFn,
}: useAnimationProps) {
  const [duration, setDuration] = useState(initial.duration);
  const [delay, setDelay] = useState(initial.delay);
  const [keyIndex, setKeyIndex] = useState(0);
  const [passedSeconds, setPassedSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPassedSeconds(passedSeconds => passedSeconds + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (passedSeconds >= delay) {
      setPassedSeconds(0);
      const newDuration = durationFn();
      setDuration(newDuration);
      setDelay(newDuration + delayFn());
      // Trick: restart animation by changing the component key
      setKeyIndex(keyIndex => keyIndex + 1);
    }
  }, [passedSeconds, delay, durationFn, delayFn]);

  return [keyIndex, duration] as const;
}

export default useAnimationTimer;
