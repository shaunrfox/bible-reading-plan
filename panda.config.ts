import {
  defineConfig,
  defineTokens,
  defineSemanticTokens,
} from '@pandacss/dev';
// import pandaPandaPreset from "@pandacss/preset-panda";
import * as tokens from './src/styles/tokens';
import { globalCss } from './src/styles/globalStyle';

import { buttonRecipe, iconButtonRecipe } from './src/recipes/button';
import { inputRecipe } from './src/recipes/input';
import { textareaRecipe } from './src/recipes/textarea';
import { textRecipe, headingRecipe, linkRecipe } from './src/recipes/text';

// using pandas methods to define type-safe tokens
const theme = {
  tokens: defineTokens({
    aspectRatios: tokens.aspectRatios,
    borders: tokens.borders,
    shadows: tokens.shadows,
    easings: tokens.easings,
    durations: tokens.durations,
    letterSpacings: tokens.letterSpacings,
    lineHeights: tokens.lineHeights,
    blurs: tokens.blurs,
    animations: tokens.animations,
    colors: tokens.colors,
    fonts: tokens.fonts,
    fontSizes: tokens.fontSizes,
    fontWeights: tokens.fontWeights,
    sizes: tokens.sizes,
    spacing: tokens.sizes,
    radii: tokens.radii,
    // filters: tokens.filters,
    keyframes: tokens.keyframes,
    containerSizes: tokens.containerSizes,
    breakpoints: tokens.breakpoints,
    // transitions: tokens.transitions,
  }),
  semanticTokens: defineSemanticTokens({
    colors: {
      utility: {
        shadowColor: {
          value: {
            base: '{colors.gray.90/10}',
            _dark: '{colors.gray.100/10}',
          },
        },
      },
    },
  }),
};

export default defineConfig({
  presets: ['@pandacss/dev/presets', '@pandacss/preset-base'],
  gitignore: true,
  jsxFramework: 'react',
  jsxStyleProps: 'all',
  jsxFactory: 'panda',
  watch: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  preflight: true,
  exclude: [],
  strictTokens: true,

  utilities: {
    extend: {
      textTransform: {
        shorthand: 'textTransform',
        values: 'type',
      },
      letterSpacing: {
        shorthand: 'tracking',
        values: 'letterSpacings',
      },
      gridColumn: {
        shorthand: 'gridColumn',
        values: 'properties',
      },
    },
  },

  theme: {
    containerSizes: tokens.containerSizes,
    keyframes: tokens.keyframes,
    tokens: {
      aspectRatios: theme.tokens.aspectRatios,
      borders: theme.tokens.borders,
      shadows: theme.tokens.shadows,
      easings: theme.tokens.easings,
      durations: theme.tokens.durations,
      letterSpacings: theme.tokens.letterSpacings,
      lineHeights: theme.tokens.lineHeights,
      blurs: theme.tokens.blurs,
      animations: theme.tokens.animations,
      colors: theme.tokens.colors,
      fonts: theme.tokens.fonts,
      fontSizes: theme.tokens.fontSizes,
      fontWeights: theme.tokens.fontWeights,
      sizes: theme.tokens.sizes,
      spacing: theme.tokens.sizes,
      radii: theme.tokens.radii,
      // filters: theme.tokens.filters,
      // transitions: theme.tokens.transitions,
    },
    semanticTokens: {
      colors: theme.semanticTokens.colors,
    },
    extend: {
      breakpoints: theme.tokens.breakpoints,
      textStyles: tokens.textStyles,
      recipes: {
        text: textRecipe,
        heading: headingRecipe,
        link: linkRecipe,
        button: buttonRecipe,
        iconButton: iconButtonRecipe,
        input: inputRecipe,
        textarea: textareaRecipe,
      },
      slotRecipes: {},
    },
  },

  patterns: {
    extend: {
      container: {
        transform(props) {
          return Object.assign(
            {
              position: 'relative',
              width: '100%',
              maxWidth: '7xl',
              mx: 'auto',
              px: { base: '24', md: '20', sm: '16' },
            },
            props,
          );
        },
      },
    },
  },

  globalCss: {
    ...globalCss,
    html: {
      '--global-font-sans': 'fonts.sans',
      '--global-font-serif': 'fonts.serif',
      '--global-font-mono': 'fonts.mono',
    },
  },

  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
    checked:
      '&:is(:checked, [data-checked], [aria-checked=true], [data-state=checked])',
    indeterminate:
      '&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])',
    closed: '&:is([data-state=closed])',
    open: '&:is([open], [data-state=open])',
    hidden: '&:is([hidden])',
    current: '&:is([data-current])',
    today: '&:is([data-today])',
    placeholderShown: '&:is(:placeholder-shown, [data-placeholder-shown])',
    collapsed:
      '&:is([aria-collapsed=true], [data-collapsed], [data-state="collapsed"])',
    containerSmall: '@container (max-width: 560px)',
    containerMedium: '@container (min-width: 561px) and (max-width: 999px)',
    containerLarge: '@container (min-width: 1000px)',
    selected: '&:is([data-selected])',
  },

  importMap: '@styled-system',

  // The output directory for your css system
  outdir: 'styled-system',
});
