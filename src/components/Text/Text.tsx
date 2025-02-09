import React from 'react';
import { Box, BoxProps } from '../Box';
import { text, type TextVariantProps } from '@styled-system/recipes';
import { cx, css } from '@styled-system/css';
import type { SystemStyleObject } from '@styled-system/types';
import { fontSizes, fonts } from '~/styles/tokens';

export interface TextProps
  extends Omit<
      BoxProps<'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4'>,
      keyof SystemStyleObject
    >,
    SystemStyleObject {
  variants?: TextVariantProps;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4';
  size?: keyof typeof fontSizes;
  family?: keyof typeof fonts;
  italic?: boolean;
  bold?: boolean;
  underline?: boolean;
  className?: string;
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      as = 'p',
      size,
      family,
      italic,
      bold,
      underline,
      className,
      children,
      variants,
      ...restProps
    },
    ref,
  ) => {
    // Extract non-style props that shouldn't be passed to css()
    const { onClick, onMouseEnter, onMouseLeave, ...styleProps } = restProps;

    const elementProps = {
      onClick,
      onMouseEnter,
      onMouseLeave,
    };

    return (
      <Box
        as={as}
        ref={ref}
        className={cx(
          text({ size, family, italic, bold, underline, ...variants }),
          css(styleProps),
          className,
        )}
        {...elementProps}
      >
        {children}
      </Box>
    );
  },
);
