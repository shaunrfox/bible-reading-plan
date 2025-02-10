import { cva, type RecipeVariantProps } from '@styled-system/css';

export const iconStyle = cva({
  base: {
    fill: 'current',
  },
});

export type IconVariantProps = RecipeVariantProps<typeof iconStyle>;
