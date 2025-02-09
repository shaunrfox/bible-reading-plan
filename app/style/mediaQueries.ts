import { CSSObject } from '@emotion/react';

type MediaQueryFunction = (style: CSSObject) => CSSObject;

export const mediaQueries = (query: string) => {
  return `@media ${query}`;
};

export const containerQuery = (query: string) => (style: CSSObject) => ({
  [`@container ${query}`]: style,
});

export const createMediaQueries = (breakpoints: { [key: string]: number }) => {
  const mediaQueries: { [key: string]: MediaQueryFunction } = {
    containerQuery,
  };

  for (const [key, value] of Object.entries(breakpoints)) {
    mediaQueries[key] = (style: CSSObject) => ({
      [mediaQueries(`(min-width: ${value}px)`)]: style,
    });
  }

  return mediaQueries;
};