import type { SystemStyleObject } from '@styled-system/css';
import { modes } from './theme';

export default (mode: modes): SystemStyleObject => ({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  'html, body, #root': {
    height: '100%',
    fontFamily: 'default',
    padding: 0,
    margin: 0,
    color: mode === modes.dark ? 'gray.20' : 'gray.60',
  },
  'p, h1, h2, h3, h4, h5, h6, span, div': {
    padding: 0,
    margin: 0,
  },
  'h1, h2, h3, h4, h5, h6': {
    color: mode === modes.dark ? 'gray.5' : 'gray.80',
  },
  body: {
    bg: mode === modes.dark ? 'gray.80' : 'gray.0',
  },
  a: {
    color: mode === modes.dark ? 'gray.5' : 'gray.80',
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderColor: "transparent",
    textDecoration: 'none',
    '&:hover': {
      color: mode === modes.dark ? 'blue.20' : 'blue.60',
      borderColor: mode === modes.dark ? 'blue.20' : 'blue.60',
    },
  }
});
