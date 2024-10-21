import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DogImages from "components/DogImages";

describe("DogImages component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<DogImages selectedBreedName="" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
