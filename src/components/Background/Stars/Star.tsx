import { StarHolder } from "components/Background/Stars/styles.tsx";

interface StarProps {
  top: number;
  left: number;
  width: number;
  height: number;
  animationDelay: number;
}

function Star({ top, left, width, height, animationDelay }: StarProps) {
  const stylesArray = [
    `top: ${top}%`,
    `left: ${left}%`,
    `width: ${width}px`,
    `height: ${height}px`,
    `animation-delay: ${animationDelay}s`,
  ];

  return <StarHolder $styles={stylesArray} />;
}

export default Star;
