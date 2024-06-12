import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Stars from "components/Background/Stars";
import { STARS } from "components/Background/constants";

describe("Stars component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Stars />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("shows all stars", () => {
    const { container } = render(<Stars />);

    expect(container.firstChild?.childNodes).toHaveLength(STARS.length);
  });
});
