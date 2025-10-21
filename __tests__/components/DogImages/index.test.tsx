import { render, waitFor, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import DogImages from "components/DogImages";
import { getDogImageURLs } from "services/dogService.ts";

beforeEach(() => {
  vi.mock("services/dogService", () => ({
    getDogImageURLs: vi.fn().mockResolvedValue(["image1.jpg", "image2.jpg"]),
  }));
});
afterEach(() => {
  vi.clearAllMocks();
});

describe("DogImages component", () => {
  describe("snapshot", () => {
    it("matches the snapshot", async () => {
      const { asFragment } = render(<DogImages selectedBreedName="komondor" />);

      await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });

  describe("dog images", () => {
    it("fetches the dog image URLs", async () => {
      render(<DogImages selectedBreedName="Komondor" />);

      await waitFor(() => {
        expect(getDogImageURLs).toHaveBeenCalledWith("Komondor", 24);
      });
    });

    it("renders correctly with dog images for the selected breed", async () => {
      render(<DogImages selectedBreedName="Komondor" />);

      await waitFor(() => {
        const images = screen.getAllByRole("img");
        expect(images).toHaveLength(2);
        expect(images[0]).toHaveAttribute("src", "image1.jpg");
        expect(images[0]).toHaveAttribute("alt", "Dog Image");
        expect(images[1]).toHaveAttribute("src", "image2.jpg");
        expect(images[1]).toHaveAttribute("alt", "Dog Image");
      });
    });

    it("handles API error gracefully and logs to console", async () => {
      const consoleErrorMock = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});
      const mockedGetDogImageURLs = vi.mocked(getDogImageURLs);
      mockedGetDogImageURLs.mockRejectedValue(new Error("Network Error"));

      render(<DogImages selectedBreedName="Komondor" />);

      await waitFor(() => {
        expect(consoleErrorMock).toHaveBeenCalledWith(
          "Dog images could not be retrieved: Error: Network Error",
        );
        expect(screen.queryAllByRole("img")).toHaveLength(0);
      });

      consoleErrorMock.mockRestore();
    });
  });
});
