import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    alias: {
      "components": resolve(__dirname, "./src/components"),
      "context": resolve(__dirname, "./src/context"),
      "hooks": resolve(__dirname, "./src/hooks"),
      "pages": resolve(__dirname, "./src/pages"),
      "providers": resolve(__dirname, "./src/providers"),
      "services": resolve(__dirname, "./src/services"),
      "utils": resolve(__dirname, "./src/utils")
    }
  }
});
