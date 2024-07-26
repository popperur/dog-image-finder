import axios from "axios";

interface AxiosError extends Error {
  isAxiosError: boolean;
  response?: {
    status: number;
    data: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request?: any;
}

function handleError<T>(
  error: Error | AxiosError,
  fallbackValue: T = null as unknown as T,
): T {
  if (axios.isAxiosError(error)) {
    // Axios-specific error
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error(
        `Server responded with status ${error.response.status}: ${error.response.data}`,
      );
    } else if (error.request) {
      // Request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error in request setup:", error.message);
    }
  } else {
    // Non-Axios error
    console.error("Unexpected error:", error);
  }
  // Return the provided fallback value to handle the error gracefully
  return fallbackValue;
}

export default handleError;
