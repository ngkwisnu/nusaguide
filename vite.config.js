import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react(), // Memasukkan plugin react-swc ke dalam array plugins
  ],
});
