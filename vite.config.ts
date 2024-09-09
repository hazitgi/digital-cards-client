import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/fetch": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fetch/, "api"),
        configure: (proxy) => {
          // proxy.on("proxyReq", (proxyReq, req) => {
          //   console.log(
          //     `[Proxy] ${req.method} ${req.url} -> ${proxyReq.getHeader(
          //       "host"
          //     )}${proxyReq.path}`
          //   );
          // });
          // proxy.on("proxyRes", (proxyRes, req) => {
          //   console.log(
          //     `[Proxy Response] ${req.method} ${req.url} -> ${proxyRes.statusCode}`
          //   );
          // });
          proxy.on("error", (err, req) => {
            console.error(
              `[Proxy Error] ${req.method} ${req.url} -> ${err.message}`
            );
          });
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
