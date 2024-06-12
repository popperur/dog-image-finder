import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Background from "components/Background";

describe("Background component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Background />);

    expect(asFragment()).toMatchSnapshot();
  });
});
