import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use CSS reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // The output directory for your CSS system
  outdir: "styled-system",

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The JSX framework to use
  jsxFramework: "react",
});
