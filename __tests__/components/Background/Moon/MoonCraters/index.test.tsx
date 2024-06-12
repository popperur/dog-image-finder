import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MoonCraters from "components/Background/Moon/MoonCraters";
import { MOON_CRATERS } from "components/Background/constants.ts";

describe("MoonCraters component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<MoonCraters />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("shows all craters and the moon signal player", () => {
    const { container } = render(<MoonCraters />);

    expect(container.firstChild?.childNodes).toHaveLength(
      MOON_CRATERS.length + 1 /* moon signal player */,
    );
  });
});
