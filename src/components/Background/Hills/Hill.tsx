import { HillHolder } from "components/Background/Hills/styles.tsx";

interface HillProps {
  bottom: number;
  left: number;
  width: number;
  height: number;
}

function Hill({ bottom, left, width, height }: HillProps) {
  const stylesArray = [
    `bottom: ${bottom}px`,
    `left: ${left}px`,
    `width: ${width}px`,
    `height: ${height}px`,
  ];

  return <HillHolder $styles={stylesArray} />;
}

export default Hill;
