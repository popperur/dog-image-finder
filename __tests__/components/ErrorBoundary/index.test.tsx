import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "components/ErrorBoundary";
import { useEffect } from "react";

const FAILING_TEXT = "I'm such a failure, sorry!";

function FailingComponent() {
  useEffect(() => {
    throw new Error(FAILING_TEXT);
  }, []);

  return <></>;
}

describe("ErrorBoundary component", () => {
  it("catches errors and displays fallback UI", () => {
    // Suppress error logging during the test - it makes the logs messy
    const consoleErrorMock = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <FailingComponent />
      </ErrorBoundary>,
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(
      screen.getByText("Umm what happened? What the hell happened?!"),
    ).toBeInTheDocument();
    expect(screen.getByText(FAILING_TEXT)).toBeInTheDocument();

    consoleErrorMock.mockRestore();
  });
});
