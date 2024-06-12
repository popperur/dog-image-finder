import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    alias: {
      'components': resolve(__dirname, './src/components'),
      'hooks': resolve(__dirname, './src/hooks')
    }
  }
});
