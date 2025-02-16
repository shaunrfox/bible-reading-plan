import React from 'react';

type AsProp<T extends React.ElementType> = {
  as?: T;
};

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref'];

export type PolymorphicComponentProp<
  T extends React.ElementType,
  Props = {},
> = React.PropsWithChildren<Props & AsProp<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Props> &
  Omit<
    JSX.IntrinsicElements[T extends keyof JSX.IntrinsicElements ? T : never],
    keyof Props
  > & {
    ref?: PolymorphicRef<T>;
  };
