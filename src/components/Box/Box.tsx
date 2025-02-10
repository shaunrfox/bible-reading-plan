// Box.tsx
import React, { forwardRef } from 'react';
// Import Panda's default Box component and its prop types
import {
  Box as PandaBox,
  type BoxProps as PandaBoxProps,
} from '@styled-system/jsx';
// Import Panda's runtime helper to split style props from others
import { splitCssProps } from '@styled-system/jsx';
import { css } from '@styled-system/css';

/**
 * Polymorphic Type Helpers
 */
type AsProp<E extends React.ElementType> = {
  as?: E;
};

type PolymorphicComponentProps<E extends React.ElementType, P = {}> = P &
  Omit<React.ComponentPropsWithoutRef<E>, keyof P | 'as'> &
  AsProp<E>;

/**
 * Use Panda's built‑in prop types for style props.
 * This type alias uses PandaBoxProps which is generated based on your theme and config.
 */
export type BoxProps<E extends React.ElementType = 'div'> =
  PolymorphicComponentProps<E, PandaBoxProps>;

// Refine the ref type for intrinsic elements
type PolymorphicRef<E extends React.ElementType> =
  E extends keyof HTMLElementTagNameMap
    ? React.Ref<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]>
    : React.ComponentPropsWithRef<E>['ref'];

/**
 * BoxInner implements:
 *  - Defaulting the `as` prop to 'div'
 *  - Splitting the incoming props using Panda's built-in splitCssProps,
 *    so that style props are handled by Panda and the remaining props
 *    (like event handlers) are forwarded to the underlying element.
 */
const BoxInner = <E extends React.ElementType = 'div'>(
  props: BoxProps<E>,
  ref: PolymorphicRef<E>,
) => {
  const { as, ...rest } = props;
  const Component = as || 'div';

  // Use Panda's splitCssProps to automatically separate style props from others.
  const [cssProps, otherProps] = splitCssProps(rest);
  const { css: cssProp, ...styleProps } = cssProps;
  const className = css(styleProps, cssProp);

  // Forward the style props to PandaBox, which knows how to handle them,
  // and all other props to the rendered element.
  return (
    <PandaBox
      as={Component}
      ref={ref as React.Ref<any>}
      className={className}
      {...otherProps}
    />
  );
};

/**
 * Wrap BoxInner with React.forwardRef to enable ref forwarding.
 */
// @ts-ignore
export const Box = forwardRef(BoxInner) as <
  E extends React.ElementType = 'div',
>(
  props: BoxProps<E> & { ref?: PolymorphicRef<E> },
) => JSX.Element;
