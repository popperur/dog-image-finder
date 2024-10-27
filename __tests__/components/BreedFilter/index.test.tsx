import { afterEach, beforeEach, describe, expect, vi } from "vitest";
import BreedFilter from "components/BreedFilter";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { getBreedNames } from "services/dogService.ts";
import * as mobile from "utils/mobile.ts";

beforeEach(() => {
  vi.mock("services/dogService", () => ({
    getBreedNames: vi.fn().mockResolvedValue(["Komondor", "Terrier"]),
  }));
});
afterEach(() => {
  vi.clearAllMocks();
});

describe("BreedFilter component", () => {
  describe("snapshot", () => {
    it("matches the snapshot", async () => {
      const { asFragment } = render(
        <BreedFilter selectedBreedName="" onBreedNameSelect={vi.fn()} />,
      );

      await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });

  describe("breed name selector", () => {
    it("fetches the breed names", async () => {
      render(<BreedFilter selectedBreedName="" onBreedNameSelect={vi.fn()} />);

      await waitFor(() => {
        expect(getBreedNames).toHaveBeenCalled();
      });
    });

    it("shows the breed names in the dropdown", async () => {
      render(<BreedFilter selectedBreedName="" onBreedNameSelect={vi.fn()} />);

      fireEvent.change(screen.getByRole("combobox"), {
        target: { value: "Kom" }, // Simulating user typing
      });

      const komondorOption = await screen.findByTitle("Komondor");
      expect(komondorOption).toBeInTheDocument();
    });

    describe("user selection", () => {
      it("calls the parent component back with the selected breed name", async () => {
        const mockOnBreedNameSelect = vi.fn();
        render(
          <BreedFilter
            selectedBreedName=""
            onBreedNameSelect={mockOnBreedNameSelect}
          />,
        );

        fireEvent.change(screen.getByRole("combobox"), {
          target: { value: "Kom" },
        });

        const komondorOption = await screen.findByTitle("Komondor");
        fireEvent.click(komondorOption);

        expect(mockOnBreedNameSelect).toHaveBeenCalledWith("Komondor");
      });

      describe("on mobile", () => {
        it("blurs the AutoComplete control", async () => {
          const mockOnBreedNameSelect = vi.fn();
          const mockBlur = vi.fn();
          vi.spyOn(mobile, "isMobileDevice").mockReturnValue(true);

          render(
            <BreedFilter
              selectedBreedName=""
              onBreedNameSelect={mockOnBreedNameSelect}
            />,
          );

          const input = screen.getByRole("combobox", {
            name: /breed name autocomplete/i,
          });
          Object.defineProperty(input, "blur", { value: mockBlur });

          fireEvent.change(screen.getByRole("combobox"), {
            target: { value: "Kom" },
          });
          const komondorOption = await screen.findByTitle("Komondor");
          fireEvent.click(komondorOption);

          expect(mockBlur).toHaveBeenCalled();
        });
      });

      describe("on desktop", () => {
        it("does not blur the AutoComplete control", async () => {
          const mockOnBreedNameSelect = vi.fn();
          const mockBlur = vi.fn();
          vi.spyOn(mobile, "isMobileDevice").mockReturnValue(false);

          render(
            <BreedFilter
              selectedBreedName=""
              onBreedNameSelect={mockOnBreedNameSelect}
            />,
          );

          const input = screen.getByRole("combobox", {
            name: /breed name autocomplete/i,
          });
          Object.defineProperty(input, "blur", { value: mockBlur });

          fireEvent.change(screen.getByRole("combobox"), {
            target: { value: "Kom" },
          });
          const komondorOption = await screen.findByTitle("Komondor");
          fireEvent.click(komondorOption);

          expect(mockBlur).not.toHaveBeenCalled();
        });
      });
    });
  });

  describe("reset button", () => {
    it("is rendered if there is a selection", async () => {
      render(
        <BreedFilter
          selectedBreedName="Komondor"
          onBreedNameSelect={vi.fn()}
        />,
      );

      await waitFor(() => {
        const resetButton = screen.getByRole("button", {
          name: /reset selection/i,
        });
        expect(resetButton).toBeInTheDocument();
      });
    });

    it("is not rendered if there is no selection", async () => {
      render(<BreedFilter selectedBreedName="" onBreedNameSelect={vi.fn()} />);

      await waitFor(() => {
        const resetButton = screen.queryByRole("button", {
          name: /reset selection/i,
        });
        expect(resetButton).not.toBeInTheDocument();
      });
    });

    it("clears the selection", async () => {
      const mockOnBreedNameSelect = vi.fn();

      render(
        <BreedFilter
          selectedBreedName="Komondor"
          onBreedNameSelect={mockOnBreedNameSelect}
        />,
      );

      await waitFor(() => {
        const resetButton = screen.getByRole("button", {
          name: /reset selection/i,
        });
        fireEvent.click(resetButton);
        expect(mockOnBreedNameSelect).toHaveBeenCalledWith("");
      });
    });

    it("focuses the AutoComplete control", async () => {
      const mockOnBreedNameSelect = vi.fn();
      const mockFocus = vi.fn();

      render(
        <BreedFilter
          selectedBreedName="Komondor"
          onBreedNameSelect={mockOnBreedNameSelect}
        />,
      );

      await waitFor(() => {
        const input = screen.getByRole("combobox", {
          name: /breed name autocomplete/i,
        });
        Object.defineProperty(input, "focus", { value: mockFocus });

        const resetButton = screen.getByRole("button", {
          name: /reset selection/i,
        });
        fireEvent.click(resetButton);

        expect(mockFocus).toHaveBeenCalled();
      });
    });
  });
});
