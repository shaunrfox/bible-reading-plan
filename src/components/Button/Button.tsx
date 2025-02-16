import React, { type ElementType } from 'react';
import { cx, css } from '@styled-system/css';
import { splitCssProps } from '@styled-system/jsx';
import { Box, type BoxProps } from '~/components/Box';
import { button, type ButtonVariantProps } from '@styled-system/recipes';
import { ButtonContent } from './ButtonContent';

export type ButtonProps = BoxProps &
  ButtonVariantProps & {
    as?: ElementType;
    size?: ButtonVariantProps['size'];
    variant?: ButtonVariantProps['variant'];
    loading?: boolean;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
  };

export const Button: React.FC<ButtonProps> = ({
  as,
  size,
  loading,
  variant,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  const trulyDisabled = loading || disabled;
  const Component = as ?? 'button';
  const [cssProps, otherProps] = splitCssProps(props);
  const { css: cssProp, ...styleProps } = cssProps;
  const className = css(cssProp, styleProps);

  return (
    // @ts-ignore
    <Box
      as={Component}
      disabled={trulyDisabled}
      aria-disabled={trulyDisabled}
      className={cx(button({ variant, size }), className)}
      {...otherProps}
    >
      <>
        <ButtonContent loading={!!loading}>{children}</ButtonContent>
      </>
    </Box>
  );
};
