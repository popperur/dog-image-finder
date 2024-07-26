import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "pages/Home";

describe("Home component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Home />);

    expect(asFragment()).toMatchSnapshot();
  });
});
