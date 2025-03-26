import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    viewportWidth: 1280,
    viewportHeight: 720,
    env: {
      VITE_BASE_URL: "https://api.rawg.io/api",
    },
  },
});
