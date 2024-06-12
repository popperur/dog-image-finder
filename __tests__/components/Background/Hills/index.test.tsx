import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hills from "components/Background/Hills";
import { HILLS } from "components/Background/constants";

describe("Hills component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Hills />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("shows all hills and the backhill", () => {
    const { container } = render(<Hills />);

    expect(container.firstChild?.childNodes).toHaveLength(
      HILLS.length + 1 /* backhill */,
    );
  });
});
