import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Relatieve base: CSS/JS laden overal goed (GitHub Pages /goleads/, eigen domein, preview)
 * zonder 404 door verkeerde absolute prefix.
 */
export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
});
