/// <reference types="vitest" />
/// <reference types="vitest/config" />

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
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
    define: {
      "import.meta.env.VITE_BASE_URL": JSON.stringify(env.VITE_BASE_URL),
      "import.meta.env.VITE_RAWG_API": JSON.stringify(env.VITE_RAWG_API),
    },
  };
});
