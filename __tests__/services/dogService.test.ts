import { describe } from "vitest";
import axios from "axios";
import { getBreedNames, getDogImageURLs } from "services/dogService.ts";
import handleError from "utils/errorHandler.ts";

vi.mock("axios");
vi.mock("utils/errorHandler", () => ({
  default: vi.fn(),
}));

const mockedAxios = vi.mocked(axios, true);
const mockedHandleError = vi.mocked(handleError, true);

describe("Dog Service", () => {
  describe("getBreedNames", () => {
    describe("breed name fetching", () => {
      it("calls the proper API endpoint", async () => {
        const mockResponse = {
          data: {
            status: "success",
            message: {},
          },
        };

        mockedAxios.get.mockResolvedValue(mockResponse);
        await getBreedNames();

        expect(mockedAxios.get).toHaveBeenCalledWith(
          "https://dog.ceo/api/breeds/list/all",
        );
      });

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
    });

    describe("error handling", () => {
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
          "Breed names could not be fetched from the Dog CEO site.",
        );

        consoleErrorMock.mockRestore();
      });

      it("calls handleError on axios error and returns the fallback array", async () => {
        const error = new Error("Network Error");
        mockedAxios.get.mockRejectedValue(error);
        mockedHandleError.mockReturnValue([]);

        const breedNames = await getBreedNames();

        expect(handleError).toHaveBeenCalledWith(error, []);
        expect(breedNames).toEqual([]);
      });
    });
  });

  describe("getDogImageURLs", () => {
    describe("image URL fetching", () => {
      it("calls the proper API endpoint for a master breed", async () => {
        const mockResponse = {
          data: { status: "success", message: [] },
        };

        mockedAxios.get.mockResolvedValue(mockResponse);
        await getDogImageURLs("Komondor");

        expect(mockedAxios.get).toHaveBeenCalledWith(
          "https://dog.ceo/api/breed/komondor/images/random/10",
        );
      });

      it("calls the proper API endpoint for a sub breed", async () => {
        const mockResponse = {
          data: { status: "success", message: [] },
        };

        mockedAxios.get.mockResolvedValue(mockResponse);
        await getDogImageURLs("Irish Spaniel");

        expect(mockedAxios.get).toHaveBeenCalledWith(
          "https://dog.ceo/api/breed/spaniel/irish/images/random/10",
        );
      });

      it("fetches the image URLs for a valid breed name", async () => {
        const mockResponse = {
          data: {
            status: "success",
            message: ["image1.jpg", "image2.jpg"],
          },
        };

        mockedAxios.get.mockResolvedValue(mockResponse);
        const dogImageURLs = await getDogImageURLs("Komondor", 2);

        expect(dogImageURLs).toEqual(["image1.jpg", "image2.jpg"]);
      });
    });

    describe("error handling", () => {
      it("throws an error if breedName is empty", async () => {
        await expect(getDogImageURLs("")).rejects.toThrow(
          "breedName is required and cannot be empty.",
        );
        await expect(getDogImageURLs(" ")).rejects.toThrow(
          "breedName is required and cannot be empty.",
        );
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
        const dogImageURLs = await getDogImageURLs("Komondor");

        expect(dogImageURLs).toEqual([]);
        expect(consoleErrorMock).toHaveBeenCalledWith(
          "Breed image URLs for Komondor could not be fetched from the Dog CEO site.",
        );

        consoleErrorMock.mockRestore();
      });

      it("calls handleError on axios error and returns the fallback array", async () => {
        const error = new Error("Network Error");
        mockedAxios.get.mockRejectedValue(error);
        mockedHandleError.mockReturnValue([]);

        const dogImageURLs = await getDogImageURLs("Komondor");

        expect(handleError).toHaveBeenCalledWith(error, []);
        expect(dogImageURLs).toEqual([]);
      });
    });
  });
});
