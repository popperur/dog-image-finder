import { MoonGlowHolder } from "components/Background/Moon/MoonGlows/styles.tsx";

interface MoonGlowProps {
  top: number;
  left: number;
  width: number;
  height: number;
  animationDuration: number;
  animationDelay: number;
}

function MoonGlow({
  top,
  left,
  width,
  height,
  animationDuration,
  animationDelay,
}: MoonGlowProps) {
  const stylesArray = [
    `top: ${top}px`,
    `left: ${left}px`,
    `width: ${width}px`,
    `height: ${height}px`,
    `animation-duration: ${animationDuration}s`,
    `animation-delay: ${animationDelay}s`,
  ];

  return <MoonGlowHolder $styles={stylesArray} />;
}

export default MoonGlow;
