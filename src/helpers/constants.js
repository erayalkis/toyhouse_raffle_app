export const API_URL =
  import.meta.env.VITE_BACKEND_URL ||
  (import.meta.env.DEV
    ? "http://localhost:8081"
    : "https://toyhouse-api.duckdns.org/");
