import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { remixDevTools } from "remix-development-tools";
import path from "path";

export default defineConfig({
  plugins: [remixDevTools(), remix(), tsconfigPaths()],
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
