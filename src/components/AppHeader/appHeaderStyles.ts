import { css } from '@styled-system/css';

export const pageHeaderStyles = css({
  display: 'grid',
  gridTemplateColumns: '1fr auto auto',
  gap: '16',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'full',
  py: '16',
  px: '24',
  '@container wrapper (width < 500px)': {
    gridTemplateColumns: '1fr auto',
  },
});

export const pageTitleStyles = css({
  display: 'inline-block',
  width: 'fit',
  m: '0',
  color: { base: 'gray.90', _dark: 'gray.5' },
  fontSize: '20',
});

export const pageDateStyles = css({
  display: 'grid',
  gridTemplateColumns: 'auto',
  gridTemplateRows: 'auto auto',
  alignItems: 'center',
  justifyItems: 'end',
  color: { base: 'gray.90', _dark: 'gray.5' },
  '& > *': {
    width: 'fit',
  },
  '@container wrapper (width < 500px)': {
    display: 'none',
  },
});
