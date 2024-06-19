/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEATHER_API_URL: string;
  readonly VITE_STATION_ID: string;
  readonly VITE_FORMAT: string;
  readonly VITE_UNITS: string;
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
