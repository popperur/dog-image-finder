import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Moon from "components/Background/Moon";
import AudioProvider from "providers/AudioProvider.tsx";

describe("Moon component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(
      <AudioProvider>
        <Moon />
      </AudioProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
