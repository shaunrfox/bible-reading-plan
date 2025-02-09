import * as React from 'react';
import { type BoxProps as PandaBoxProps } from '@styled-system/jsx';

// Allows specifying which HTML element to render as
type AsProp<T extends React.ElementType> = {
  as?: T;
};

// Helper type to handle prop conflicts
type PropsToOmit<T extends React.ElementType, P> = keyof (AsProp<T> & P);

// The main polymorphic type that:
// - Accepts children
// - Handles the 'as' prop
// - Manages proper HTML attributes based on the element type
type PolymorphicComponentProp<
  T extends React.ElementType,
  Props = {},
> = React.PropsWithChildren<Props & AsProp<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>;

type BoxComponentProps = PandaBoxProps;

export type BoxProps<T extends React.ElementType> = PolymorphicComponentProp<
  T,
  BoxComponentProps
>;

export function Box<T extends React.ElementType = 'div'>({
  as,
  children,
  ...props
}: BoxProps<T>) {
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>;
}
