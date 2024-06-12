import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Dog from "components/Background/Dog";

describe("Dog component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Dog />);

    expect(asFragment()).toMatchSnapshot();
  });
});
