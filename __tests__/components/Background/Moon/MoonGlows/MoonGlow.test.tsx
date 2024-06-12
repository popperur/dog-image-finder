import "jest-styled-components";
import { render, RenderResult } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import MoonGlow from "components/Background/Moon/MoonGlows/MoonGlow";

describe("MoonGlow component", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(
      <MoonGlow
        top={10}
        left={20}
        width={40}
        height={60}
        animationDuration={2}
        animationDelay={4}
      />,
    );
  });

  it("matches the snapshot", () => {
    const { asFragment } = rendered;
    expect(asFragment()).toMatchSnapshot();
  });

  it("adds the styles to the styled component", () => {
    const { container } = rendered;

    const moonGlowHolder = container.firstChild;

    expect(moonGlowHolder).toHaveStyleRule("top", "10px");
    expect(moonGlowHolder).toHaveStyleRule("left", "20px");
    expect(moonGlowHolder).toHaveStyleRule("width", "40px");
    expect(moonGlowHolder).toHaveStyleRule("height", "60px");
    expect(moonGlowHolder).toHaveStyleRule("animation-duration", "2s");
    expect(moonGlowHolder).toHaveStyleRule("animation-delay", "4s");
  });
});
