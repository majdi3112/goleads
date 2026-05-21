import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relatieve paden: werkt op GitHub Pages (/goleads/), op root-domein én na hard refresh bij nieuwe builds.
  base: "./",
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
});
