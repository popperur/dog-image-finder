import "jest-styled-components";
import { render, RenderResult } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Hill from "components/Background/Hills/Hill";

describe("Hill component", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<Hill bottom={0} left={20} width={40} height={60} />);
  });

  it("matches the snapshot", () => {
    const { asFragment } = rendered;
    expect(asFragment()).toMatchSnapshot();
  });

  it("adds the styles to the styled component", () => {
    const { container } = rendered;

    const hillHolder = container.firstChild;

    expect(hillHolder).toHaveStyleRule("bottom", "0px");
    expect(hillHolder).toHaveStyleRule("left", "20px");
    expect(hillHolder).toHaveStyleRule("width", "40px");
    expect(hillHolder).toHaveStyleRule("height", "60px");
  });
});
