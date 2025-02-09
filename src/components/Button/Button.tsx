import * as React from 'react';
import { cx } from '@styled-system/css';
import { Box, BoxProps } from '../Box';
import { button, type ButtonVariantProps } from '@styled-system/recipes';
import { Spinner } from '~/components/Spinner';
import { css } from '@styled-system/css';
import type { SystemStyleObject } from '@styled-system/types';

// The key is to use Panda's SystemStyleObject type while preserving the button's native props.
// We're letting the Box component handle the native HTML props through its BoxProps type.
// So we're passing props directly to both css() and the spread operator.
// This works because:
// The BoxProps type already includes all valid HTML attributes for the button/anchor element
// Panda's css() function will only use the valid style properties from the props object
// Any remaining props (like onClick) will be properly handled by the spread operator

export interface ButtonProps
  extends BoxProps<'button'>,
    Omit<SystemStyleObject, keyof ButtonVariantProps> {
  variant?: 'primary' | 'standard' | 'hollow' | 'ghost' | 'cta' | 'danger';
  size?: 'standard' | 'small' | 'large';
  href?: string;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

const ButtonContent = ({
  loading,
  children,
}: {
  loading: boolean;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Box
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '2',
          opacity: loading ? 0 : 1,
        })}
      >
        {children}
      </Box>
      {loading && (
        <Box
          className={css({
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          <Spinner />
        </Box>
      )}
    </>
  );
};

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    { variant, size, href, className, children, loading, disabled, ...props },
    ref,
  ) => {
    const trulyDisabled = loading || disabled;
    const Component = href ? 'a' : 'button';

    return (
      <Box
        ref={ref as React.Ref<HTMLButtonElement | HTMLAnchorElement>}
        as={Component}
        href={href}
        disabled={trulyDisabled}
        aria-disabled={trulyDisabled}
        className={cx(button({ variant, size }), css(props), className)}
        type={Component === 'button' ? 'button' : undefined}
        {...props}
      >
        <ButtonContent loading={loading || false}>{children}</ButtonContent>
      </Box>
    );
  },
);
