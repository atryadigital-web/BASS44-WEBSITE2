import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    // Vite >= 6.1 appends __VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS (set by the Base44 sandbox) automatically.
    watch: process.env.BASE44_PREVIEW_MODE === "1" ? { usePolling: true, interval: 300 } : undefined,
  },
});
