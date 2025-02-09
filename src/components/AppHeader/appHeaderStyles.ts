import { css } from '@styled-system/css';

export const pageHeaderStyles = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'full',
  py: '16',
  px: '24',
  '@container wrapper (width < 500px)': {
    flexDirection: 'column',
  },
});

export const pageTitleStyles = css({
  display: 'inline-block',
  width: 'fit',
  m: '0',
  color: 'current',
  '@container wrapper (width < 640px)': {
    textAlign: 'center',
  },
});
