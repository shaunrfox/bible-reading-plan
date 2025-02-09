import { defineRecipe } from '@pandacss/dev';

const textBase = {
  margin: '0',
  lineHeight: 'default',
  fontWeight: 'normal',
  color: { base: 'gray.70', _dark: 'gray.20' },
};

const textVariants = {
  size: {
    '12': { fontSize: '12' },
    '14': { fontSize: '14' },
    '16': { fontSize: '16' },
    '20': { fontSize: '20' },
    '24': { fontSize: '24' },
    '32': { fontSize: '32' },
    '40': { fontSize: '40' },
    '48': { fontSize: '48' },
    '64': { fontSize: '64' },
    '72': { fontSize: '72' },
    '80': { fontSize: '80' },
    '96': { fontSize: '96' },
  },
  family: {
    sans: { fontFamily: 'sans' },
    serif: { fontFamily: 'serif' },
    mono: { fontFamily: 'mono' },
  },
  bold: {
    true: {
      fontWeight: 'bold',
    },
  },
  italic: {
    true: {
      fontStyle: 'italic',
    },
  },
  underline: {
    true: {
      textDecoration: 'underline',
    },
  },
};

const headingBase = {
  fontFamily: 'sans',
  fontWeight: 'bold',
  color: { base: 'gray.90', _dark: 'gray.5' },
};

const headingVariants = {
  as: {
    h1: { textStyle: 'heading.lg' },
    h2: { textStyle: 'heading.md' },
    h3: { textStyle: 'heading.sm' },
    h4: { textStyle: 'heading.xs' },
  },
};

const linkBase = {
  display: 'inline-flex',
  alignItems: 'center',
  fontWeight: 'medium',
  gap: '1',
  color: { base: 'blue.50', _dark: 'blue.40' },
  textDecoration: 'none',
  backgroundImage: 'linear-gradient(90deg, transparent 0% 100%)',
  backgroundSize: '100% 1px',
  backgroundRepeat: 'no-repeat',
  backgroundPositionY: '100%',
  width: 'fit-content',
  cursor: 'pointer',
  _hover: {
    color: { base: 'blue.40', _dark: 'blue.30' },
    backgroundImage: 'linear-gradient(90deg, currentColor 0% 100%)',
  },
};

const linkVariants = {
  ...textVariants,
  _disabled: {
    true: {
      cursor: 'not-allowed',
      opacity: 0.7,
      pointerEvents: 'none',
    },
  },
};

export const textRecipe = defineRecipe({
  className: 'text',
  jsx: ['Text'],
  base: textBase,
  variants: { ...textVariants },
  defaultVariants: {
    size: '16',
    family: 'serif',
  },
});

export const headingRecipe = defineRecipe({
  className: 'heading',
  jsx: ['Heading'],
  base: headingBase,
  variants: headingVariants,
  defaultVariants: {
    as: 'h2',
  },
});

export const linkRecipe = defineRecipe({
  className: 'link',
  jsx: ['Link'],
  base: linkBase,
  variants: linkVariants,
  defaultVariants: {
    size: '16',
    family: 'serif',
  },
});
