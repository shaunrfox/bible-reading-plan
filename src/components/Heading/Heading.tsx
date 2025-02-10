import React from 'react';
import { Box, type BoxProps } from '~/components/Box';
import { heading, type HeadingVariantProps } from '@styled-system/recipes';
import { cx } from '@styled-system/css';

// A helper to correctly infer the ref type based on the rendered element
type PolymorphicRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E>['ref'];

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4';

export interface HeadingProps<E extends React.ElementType = 'p'>
  // @ts-ignore
  extends BoxProps<E> {
  variants?: HeadingVariantProps;
  as?: E | HeadingElement;
  className?: string;
  children?: React.ReactNode;
}

export const Heading = React.forwardRef(function Heading<
  E extends React.ElementType = 'h2',
>(
  { as, className, children, variants, ...props }: HeadingProps<E>,
  ref: PolymorphicRef<E>,
) {
  const Component = as || 'h2';

  return (
    <Box
      as={Component}
      ref={ref}
      className={cx(heading({ ...variants }), className)}
      {...props}
    >
      {children}
    </Box>
  );
}) as <E extends React.ElementType = 'h2'>(
  props: HeadingProps<E> & { ref?: PolymorphicRef<E> },
) => JSX.Element;
