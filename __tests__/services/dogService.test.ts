import { describe } from "vitest";
import axios from "axios";
import { getBreedNames } from "services/dogService.ts";

vi.mock("axios");
const mockedAxios = vi.mocked(axios, true);

describe("Dog Service", () => {
  describe("getBreedNames", () => {
    it("fetches and transforms breed names", async () => {
      const mockResponse = {
        data: {
          status: "success",
          message: {
            spaniel: ["japanese", "irish", "cocker", "russian"],
            komondor: [],
          },
        },
      };

      // breed names should be flattened, capitalized and sorted
      const expectedBreedNames = [
        "Cocker Spaniel",
        "Irish Spaniel",
        "Japanese Spaniel",
        "Komondor",
        "Russian Spaniel",
      ];

      mockedAxios.get.mockResolvedValue(mockResponse);
      const breedNames = await getBreedNames();

      expect(breedNames).toEqual(expectedBreedNames);
    });

    it("logs error for non-success response", async () => {
      const consoleErrorMock = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});

      const mockResponse = {
        data: {
          status: "error",
          message: {},
        },
      };

      mockedAxios.get.mockResolvedValue(mockResponse);
      const breedNames = await getBreedNames();

      expect(breedNames).toEqual([]);
      expect(consoleErrorMock).toHaveBeenCalledWith(
        "Dog.ceo retrieved the message with a non-success status.",
      );

      consoleErrorMock.mockRestore();
    });
  });
});
