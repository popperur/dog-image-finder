import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Moon from "components/Background/Moon";

describe("Moon component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Moon />);

    expect(asFragment()).toMatchSnapshot();
  });
});
