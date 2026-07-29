import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "djodev-icons": path.resolve(__dirname, "src/icons/index.ts"),
    },
  },
  plugins: [
    tanstackStart(),
    netlify(),
    react(),
    tailwindcss(),
  ],
});
