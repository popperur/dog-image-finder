import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MoonCraters from "components/Background/Moon/MoonCraters";
import { MOON_CRATERS } from "components/Background/constants.ts";
import AudioProvider from "providers/AudioProvider.tsx";

describe("MoonCraters component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(
      <AudioProvider>
        <MoonCraters />
      </AudioProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("shows all craters and the moon signal player", () => {
    const { container } = render(
      <AudioProvider>
        <MoonCraters />
      </AudioProvider>,
    );

    expect(container.firstChild?.childNodes).toHaveLength(
      MOON_CRATERS.length + 1 /* moon signal player */,
    );
  });
});
