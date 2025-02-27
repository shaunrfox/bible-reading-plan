import React, { type ElementType } from 'react';
import {
  splitCssProps,
  type BoxProps as PandaBoxProps,
} from '@styled-system/jsx';
import { css } from '@styled-system/css';

export interface BoxyProps<T extends ElementType = 'div'>
  extends PandaBoxProps {
  as?: T;
  children?: React.ReactNode | string;
}

function BoxInner<T extends ElementType = 'div'>({
  as,
  ...props
}: BoxyProps<T>) {
  return React.createElement(as || 'div', { ...props });
}

export function Boxy<T extends ElementType = 'div'>({
  as,
  ...props
}: BoxyProps<T>) {
  const [cssProps, otherProps] = splitCssProps(props);
  const { css: cssProp, ...styleProps } = cssProps;
  const className = css(styleProps, cssProp);
  return <BoxInner as={as} {...otherProps} className={className} />;
}

// import { css } from '@styled-system/css';
// import {
//   Box as PandaBox,
//   type BoxProps as PandaBoxProps,
//   splitCssProps,
// } from '@styled-system/jsx';

// export type BoxyProps = PandaBoxProps & {
//   children?: React.ReactNode | string;
// };

// export function Boxy({ ...props }: BoxyProps) {
//   const [cssProps, otherProps] = splitCssProps(props);
//   const { css: cssProp, ...styleProps } = cssProps;
//   const className = css(styleProps, cssProp);

//   return (
//     <PandaBox className={className} {...otherProps}>
//       {props.children}
//     </PandaBox>
//   );
// }
