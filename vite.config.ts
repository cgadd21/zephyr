import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load env variables based on the current mode
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    base: "/zephyr/",
    server: {
      proxy: {
        "/api": {
          target: `${env.VITE_WEATHER_API_URL}stationId=${env.VITE_STATION_ID}&format=${env.VITE_FORMAT}&units=${env.VITE_UNITS}&apiKey=${env.VITE_API_KEY}`,
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
