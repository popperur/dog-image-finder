import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Background from "components/Background";
import AudioProvider from "providers/AudioProvider.tsx";

describe("Background component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(
      <AudioProvider>
        <Background showElements={true} />
      </AudioProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
