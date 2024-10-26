import { afterEach, beforeEach, describe, expect, vi } from "vitest";
import BreedFilter from "components/BreedFilter";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { getBreedNames } from "services/dogService.ts";

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
  });
});
