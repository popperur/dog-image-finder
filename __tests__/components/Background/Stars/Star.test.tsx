import "jest-styled-components";
import { render, RenderResult } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Star from "components/Background/Stars/Star";

describe("Star component", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(
      <Star top={0} left={20} width={40} height={60} animationDelay={1.5} />,
    );
  });

  it("matches the snapshot", () => {
    const { asFragment } = rendered;
    expect(asFragment()).toMatchSnapshot();
  });

  it("adds the styles to the styled component", () => {
    const { container } = rendered;

    const starHolder = container.firstChild;

    expect(starHolder).toHaveStyleRule("top", "0%");
    expect(starHolder).toHaveStyleRule("left", "20%");
    expect(starHolder).toHaveStyleRule("width", "40px");
    expect(starHolder).toHaveStyleRule("height", "60px");
    expect(starHolder).toHaveStyleRule("animation-delay", "1.5s");
  });
});
