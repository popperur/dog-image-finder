import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DogHead from "components/Background/Dog/DogHead";

describe("DogHead component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<DogHead />);

    expect(asFragment()).toMatchSnapshot();
  });
});
