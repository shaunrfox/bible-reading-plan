import { cx } from '@styled-system/css';
import { Box } from '../Box/Box';
import { spinnerStyle } from './spinnerStyles';
import { type HTMLStyledProps } from '@styled-system/types';

type SpinnerProps = HTMLStyledProps<'div'> & {
  size?: 'standard' | 'small' | 'large';
};

export const Spinner = ({ size = 'standard', className, ...props }: SpinnerProps) => {
  return <Box className={cx(spinnerStyle({ size }), className)} {...props} />;
};
