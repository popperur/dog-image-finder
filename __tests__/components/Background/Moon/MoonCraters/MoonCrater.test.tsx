import "jest-styled-components";
import { render, RenderResult } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import MoonCrater from "components/Background/Moon/MoonCraters/MoonCrater";

describe("MoonCrater component", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(
      <MoonCrater top={10} left={20} width={40} height={60} opacity={0.5} />,
    );
  });

  it("matches the snapshot", () => {
    const { asFragment } = rendered;
    expect(asFragment()).toMatchSnapshot();
  });

  it("adds the styles to the styled component", () => {
    const { container } = rendered;

    const moonCraterHolder = container.firstChild;

    expect(moonCraterHolder).toHaveStyleRule("top", "10px");
    expect(moonCraterHolder).toHaveStyleRule("left", "20px");
    expect(moonCraterHolder).toHaveStyleRule("width", "40px");
    expect(moonCraterHolder).toHaveStyleRule("height", "60px");
    expect(moonCraterHolder).toHaveStyleRule("opacity", "0.5");
  });
});
