import { cva, type RecipeVariantProps } from '@styled-system/css';

export const iconStyle = cva({
  base: {
    fill: 'currentColor',
    // width: '24',
    // height: '24',
  },
});

export type IconVariantProps = RecipeVariantProps<typeof iconStyle>;
