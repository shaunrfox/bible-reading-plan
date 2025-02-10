import React from 'react';
import { Box, type BoxProps } from '~/components/Box';
import { text, type TextVariantProps } from '@styled-system/recipes';
import { cx } from '@styled-system/css';
// import type { FontSizeToken, FontToken } from '@styled-system/tokens';
import type { JsxStyleProps } from '@styled-system/types';

// A helper to correctly infer the ref type based on the rendered element
type PolymorphicRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E>['ref'];

/**
 * TextProps is now generic. It extends BoxProps for the element type E
 * (defaulting to 'p') and includes our additional props (variants, size, etc.).
 * Since BoxProps<E> internally uses React.ComponentPropsWithoutRef<E>,
 * any intrinsic event handlers (e.g. onClick) are automatically included.
 */
export interface TextProps<E extends React.ElementType = 'p'>
  // @ts-ignore
  extends BoxProps<E> {
  variants?: TextVariantProps;
  as?: E;
  fontSize?: JsxStyleProps;
  family?: JsxStyleProps | string;
  italic?: boolean;
  bold?: boolean;
  underline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/**
 * The Text component is built on top of Box.
 * It forwards all props (including event handlers and style props) directly to Box,
 * and combines our text recipe classes with any custom className.
 */
export const Text = React.forwardRef(function Text<
  E extends React.ElementType = 'p',
>(
  {
    as,
    fontSize,
    family,
    italic,
    bold,
    underline,
    className,
    children,
    variants,
    ...props
  }: TextProps<E>,
  ref: PolymorphicRef<E>,
) {
  // Default to a paragraph if no "as" is provided.
  const Component = as || 'p';

  return (
    <Box
      as={Component}
      ref={ref}
      className={cx(
        // Generate recipe-based classes using your text recipe
        text({ fontSize, family, italic, bold, underline, ...variants }),
        // Merge with any additional className passed in
        className,
      )}
      {...props}
    >
      {children}
    </Box>
  );
}) as <E extends React.ElementType = 'p'>(
  props: TextProps<E> & { ref?: PolymorphicRef<E> },
) => JSX.Element;
