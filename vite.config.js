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
  define: {
    "import.meta.env.VITE_BASE_URL": JSON.stringify(
      process.env.VITE_BASE_URL || "https://api.rawg.io/api",
    ),
    "import.meta.env.VITE_RAWG_API": JSON.stringify(
      process.env.VITE_RAWG_API || "7fb65369e0524fc39c70010b2055d364",
    ),
  },
});
