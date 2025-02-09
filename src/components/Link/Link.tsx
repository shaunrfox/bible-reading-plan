import { Box } from '../Box';
import { link, type LinkVariantProps } from '@styled-system/recipes';
import { cx, css } from '@styled-system/css';
import type { SystemStyleObject } from '@styled-system/types';
import { fontSizes, fonts } from '~/styles/tokens';
import { Icon } from '../Icon/Icon';

export interface LinkProps extends Omit<SystemStyleObject, keyof LinkVariantProps> {
  href: string;
  external?: boolean;
  disabled?: boolean;
  level?: keyof typeof fontSizes;
  font?: keyof typeof fonts;
  italic?: boolean;
  bold?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Link({
  href,
  external,
  disabled,
  children,
  level,
  font,
  italic,
  bold,
  className,
  ...props
}: LinkProps) {
  const styleProps: SystemStyleObject = { ...props };

  return (
    <Box
      as="a"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-disabled={disabled}
      className={cx(
        link({ font, italic, bold, level }),
        css(styleProps),
        className,
      )}
    >
      {children}
      {external && <Icon name="arrow-square-out" size={20} />}
    </Box>
  );
}
