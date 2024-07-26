import { describe, vi } from "vitest";
import BreedFilter from "components/BreedFilter";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { getBreedNames } from "services/dogService.ts";

describe("BreedFilter component", () => {
  describe("Snapshot", () => {
    it("matches the snapshot", () => {
      const { asFragment } = render(<BreedFilter />);

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("Breed name selection", () => {
    beforeEach(() => {
      vi.mock("services/dogService", () => ({
        getBreedNames: vi.fn().mockResolvedValue(["Komondor"]),
      }));
    });

    it("fetches the breed names", async () => {
      render(<BreedFilter />);

      await waitFor(() => {
        expect(getBreedNames).toHaveBeenCalled();
      });
    });

    it("stores the breed names", async () => {
      render(<BreedFilter />);

      // Ant Design's Autocomplete doesn't like click, so we use mouseDown
      // https://stackoverflow.com/questions/61080116/ant-design-v4-breaks-react-testing-library-tests-for-select-and-autocomplete/61115234
      // https://github.com/ant-design/ant-design/issues/22074
      fireEvent.mouseDown(screen.getByRole("combobox"));

      await waitFor(() => {
        expect(screen.getByTitle("Komondor")).toBeInTheDocument();
      });
    });

    it("logs the selected breed", async () => {
      render(<BreedFilter />);

      const consoleLogMock = vi
        .spyOn(console, "log")
        .mockImplementation(() => {});
      fireEvent.change(screen.getByRole("combobox"), {
        target: { value: "Komondor" },
      });

      const komondorOption = await screen.findByTitle("Komondor");
      fireEvent.click(komondorOption);

      expect(consoleLogMock).toHaveBeenCalledWith("Selected breed: Komondor");

      consoleLogMock.mockRestore();
    });
  });
});
