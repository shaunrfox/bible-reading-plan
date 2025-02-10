import { cx } from '@styled-system/css';
import { iconStyle } from './iconStyle';
import { IconNamesList } from './icons';
import { type SizeToken } from '@styled-system/tokens';
import { Box, type BoxProps } from '../Box/Box';

export interface IconProps extends BoxProps<'svg'> {
  name: IconNamesList;
  size?: SizeToken;
}

export const Icon = ({ name, size = '24', className, ...props }: IconProps) => {
  return (
    // @ts-ignore
    <Box<'svg'>
      as="svg"
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={cx(iconStyle(), className)}
      {...props}
    >
      <use xlinkHref={`/sprite.svg#${name}`} />
    </Box>
  );
};
