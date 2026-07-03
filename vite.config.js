import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" keeps asset paths relative so the built site works from any
// static host (Netlify, Vercel, GitHub Pages) or opened locally.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
