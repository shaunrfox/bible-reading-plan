import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { remixDevTools } from "remix-development-tools";
import path from "path";

export default defineConfig({
  base: "/bible-reading-plan/",
  plugins: [
    remixDevTools(),
    remix({
      basename: "/bible-reading-plan/",
      ssr: false,
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "app"),
    },
  },
  server: {
    open: false,
    port: 3000,
  },
  build: {
    outDir: "build",
  },
  json: {
    stringify: true,
  },
});
