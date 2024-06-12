import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MOON_GLOWS } from "components/Background/constants.ts";
import MoonGlows from "components/Background/Moon/MoonGlows";

describe("MoonGlows component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<MoonGlows />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("shows all glows", () => {
    const { container } = render(<MoonGlows />);

    expect(container.firstChild?.childNodes).toHaveLength(MOON_GLOWS.length);
  });
});
