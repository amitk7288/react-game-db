/// <reference types="vitest" />
/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setupTests.js",
    coverage: {
      exclude: [
        "postcss.config.js",
        "tailwind.config.js",
        "vite.config.js",
        "src/main.jsx",
        "src/App.jsx",
        "src/data/**",
      ],
    },
  },
});
