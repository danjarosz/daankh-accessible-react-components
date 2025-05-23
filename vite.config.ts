import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    ...configDefaults,
    globals: true,
    environment: 'jsdom', // Required for DOM testing
    setupFiles: './setupTests.ts', // Path to your setup file
  },
});
