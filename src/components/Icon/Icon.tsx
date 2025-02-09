import { cx } from '@styled-system/css';
import { iconStyle } from './iconStyle';
import { IconNamesList } from './icons';
import { type HTMLStyledProps } from '@styled-system/types';
import { Box } from '../Box/Box';

type IconProps = HTMLStyledProps<'svg'> & {
  name: IconNamesList;
  className?: string;
  size?: number;
};

export function Icon({ name, className, size = 24, ...props }: IconProps) {
  return (
    <Box
      as="svg"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={cx(iconStyle(), className)}
      {...props}
    >
      <use xlinkHref={`/sprite.svg#${name}`} />
    </Box>
  );
}
