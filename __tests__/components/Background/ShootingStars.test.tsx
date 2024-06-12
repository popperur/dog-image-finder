import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ShootingStars from "components/Background/ShootingStars.tsx";

describe("ShootingStars component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<ShootingStars />);

    expect(asFragment()).toMatchSnapshot();
  });
});
