import { css } from '@styled-system/css';

export const dateNavStyles = css({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  placeItems: 'center',
  gap: '16',
  p: '16',
  bg: { base: 'gray.5', _dark: 'gray.90' },
  borderRadius: '8',
  mb: '40',
  '@container wrapper (width < 500px)': {
    marginBottom: '24',
    bg: { base: 'transparent', _dark: 'transparent' },
    mb: '0',
  },
});
