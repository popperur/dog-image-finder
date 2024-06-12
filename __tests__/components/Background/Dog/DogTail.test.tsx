import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DogTail from "components/Background/Dog/DogTail";

describe("DogTail component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<DogTail />);

    expect(asFragment()).toMatchSnapshot();
  });
});
