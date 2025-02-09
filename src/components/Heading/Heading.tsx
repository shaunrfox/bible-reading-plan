import React from 'react';
import { Box, BoxProps } from '../Box';
import { heading, type HeadingVariantProps } from '@styled-system/recipes';
import { cx, css } from '@styled-system/css';
import type { SystemStyleObject } from '@styled-system/types';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4';

export interface HeadingProps
  extends Omit<BoxProps<HeadingElement>, keyof SystemStyleObject>,
    SystemStyleObject {
  variants?: HeadingVariantProps;
  as?: HeadingElement;
  className?: string;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = 'h2', className, children, variants, ...restProps }, ref) => {
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
        className={cx(heading({ as, ...variants }), css(styleProps), className)}
        {...elementProps}
      >
        {children}
      </Box>
    );
  },
);
