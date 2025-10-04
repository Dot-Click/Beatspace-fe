import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Ensure CommonJS packages in node_modules are transformed properly (e.g., react)
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
