import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DogHouse from "components/Background/DogHouse";

describe("DogHouse component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<DogHouse />);

    expect(asFragment()).toMatchSnapshot();
  });
});
