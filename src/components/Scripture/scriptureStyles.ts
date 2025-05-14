import { css } from '@styled-system/css';

export const wrapper = css({
  // display: 'grid',
  alignContent: 'center',
  transition: 'all 0.2s ease-in-out',
  translate: '0 0',
  // zIndex: '0',
  opacity: '1',
  '@starting-style': {
    // translate: '0 10%',
    // scale: '0.9',
    // zIndex: '-10',
    py: '80',
    opacity: '0',
    transition: 'all 0.2s ease-in-out',
    pointerEvents: 'none',
  },
  position: 'absolute',
  inset: '0',
  // flexDirection: 'column',
  // alignItems: 'center',
  width: 'full',
  padding: '24',
});

export const scrim = css({
  position: 'absolute',
  inset: '0',
  bg: 'gray.100/60',
  zIndex: '1',
});

export const container = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 'full',
  maxWidth: '2xl',
  maxH: '3xl',
  bg: { base: 'gray.0', _dark: 'gray.94' },
  borderRadius: '16',
  boxShadow: 'high',
  zIndex: '2',
  margin: 'auto',
});

export const header = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'full',
  px: '32',
  py: '16',
  borderBottom: '1px solid',
  borderColor: { base: 'gray.5', _dark: 'gray.80' },
});

export const body = css({
  display: 'flex',
  flexDirection: 'column',
  width: 'full',
  px: '32',
  pb: '40',
  pt: '16',
  overflowY: 'auto',
  height: 'fit',
  mb: '8',
});

export const footer = css({
  position: 'absolute',
  bottom: '0',
  width: 'full',
  height: '40',
  borderBottomRightRadius: '16',
  borderBottomLeftRadius: '16',
  bg: {
    base: 'linear-gradient(0deg, var(--colors-gray-0) 0%, rgba(0,0,0,0) 100%)',
    _dark:
      'linear-gradient(0deg, var(--colors-gray-94) 0%, rgba(0,0,0,0) 100%)',
  },
  pointerEvents: 'none',
});
