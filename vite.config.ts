import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { remixDevTools } from "remix-development-tools";
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    remixDevTools(),
    remix(),
    tsconfigPaths(),
    react(),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'app'),
    },
  },
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
});