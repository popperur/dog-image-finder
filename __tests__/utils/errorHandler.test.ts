import { describe, it, expect, vi } from "vitest";
import handleError from "utils/errorHandler.ts";

describe("Error Handler", () => {
  describe("handleError", () => {
    it("should return the fallback value to handle the error gracefully", () => {
      const error = {
        name: "AxiosError",
        message: "Request failed with status code 404",
        isAxiosError: true,
        response: {
          status: 404,
          data: "Not Found",
        },
      };

      const fallbackValue: string[] = [];
      const result = handleError(error, fallbackValue);
      expect(result).toEqual(fallbackValue);
    });

    it("should handle axios error with response", () => {
      const error = {
        name: "AxiosError",
        message: "Request failed with status code 404",
        isAxiosError: true,
        response: {
          status: 404,
          data: "Not Found",
        },
      };

      const consoleErrorMock = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});
      handleError(error);

      expect(consoleErrorMock).toHaveBeenCalledWith(
        "Server responded with status 404: Not Found",
      );

      consoleErrorMock.mockRestore();
    });

    it("should handle axios error with no response", () => {
      const error = {
        name: "AxiosError",
        message: "Network Error",
        isAxiosError: true,
        request: {},
      };

      const consoleErrorMock = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});
      handleError(error);

      expect(consoleErrorMock).toHaveBeenCalledWith(
        "No response received:",
        {},
      );

      consoleErrorMock.mockRestore();
    });

    it("should handle axios error in request setup", () => {
      const error = {
        name: "AxiosError",
        message: "Request setup error",
        isAxiosError: true,
      };

      const consoleErrorMock = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});
      handleError(error);

      expect(consoleErrorMock).toHaveBeenCalledWith(
        "Error in request setup:",
        "Request setup error",
      );

      consoleErrorMock.mockRestore();
    });

    it("should handle non-axios error", () => {
      const error = new Error("Non-Axios error");

      const consoleErrorMock = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});
      handleError(error);

      expect(consoleErrorMock).toHaveBeenCalledWith("Unexpected error:", error);

      consoleErrorMock.mockRestore();
    });
  });
});
