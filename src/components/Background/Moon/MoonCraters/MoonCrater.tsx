import { MoonCraterHolder } from "components/Background/Moon/MoonCraters/styles.tsx";

interface MoonCraterProps {
  top: number;
  left: number;
  width: number;
  height: number;
  opacity: number;
}

function MoonCrater({ top, left, width, height, opacity }: MoonCraterProps) {
  const stylesArray = [
    `top: ${top}px`,
    `left: ${left}px`,
    `width: ${width}px`,
    `height: ${height}px`,
    `opacity: ${opacity}`,
  ];

  return <MoonCraterHolder $styles={stylesArray} />;
}

export default MoonCrater;
