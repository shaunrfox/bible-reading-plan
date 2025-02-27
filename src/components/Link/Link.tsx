import { Box, type BoxProps } from '../Box';
import { link, type LinkVariantProps } from '@styled-system/recipes';
import { type FontSizeToken, type FontToken, type FontWeightToken } from '@styled-system/tokens';
import { Icon } from '../Icon/Icon';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';

export type LinkProps = Omit<BoxProps, keyof LinkVariantProps> & LinkVariantProps & {
  href: string;
  external?: boolean;
  disabled?: boolean;
  size?: FontSizeToken;
  family?: FontToken;
  italic?: boolean;
  bold?: boolean;
  weight?: FontWeightToken;
  className?: string;
  children?: React.ReactNode;
};

export const Link: React.FC<LinkProps> = (
  {
    href,
    external,
    disabled,
    children,
    size,
    family,
    weight,
    italic,
    bold,
    ...props
  }: LinkProps,
) => {

  const [ className, otherProps ] = splitProps(props);
  return (
    <Box
      as="a"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-disabled={disabled}
      className={cx(
        link({ family, italic, bold, size, weight }),
        className as string,
      )}
      {...otherProps}
    >
      {children}
      {external && <Icon name="arrow-square-out" size={'20'} />}
    </Box>
  );
};
