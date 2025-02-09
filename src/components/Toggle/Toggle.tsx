import React from "react";
import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export type ToggleProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  children?: React.ReactNode;
};

const toggleStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${theme.size[8]};
  cursor: pointer;
  user-select: none;
  color: ${theme.mode === "light"
    ? theme.color.gray[80]
    : theme.color.gray[10]};

  label {
    color: ${theme.mode === "light"
      ? theme.color.gray[20]
      : theme.color.gray[80]};
    font-size: ${theme.size[14]};
  }
`;

// const ToggleWrapper = React.forwardRef<HTMLDivElement, ToggleProps>(
//   ({ checked, onCheckedChange, label, children, ...props }, ref) => {
//     return (
//       <div css={(theme: Theme) => [toggleStyles(theme)]} ref={ref} {...props}>
//         {children}
//       </div>
//     );
//   }
// );

// const Label = React.forwardRef<
//   HTMLDivElement,
//   React.ComponentPropsWithoutRef<"div">
// >(({ ...props }, ref) => {
//   return (
//     <div
//       ref={ref}
//       {...props}
//       css={(theme: Theme) => [
//         css`
//           color: ${theme.mode === "light"
//             ? theme.color.gray[20]
//             : theme.color.gray[80]};
//           font-size: ${theme.font.size[14]};
//         `,
//       ]}
//     />
//   );
// });

// const HiddenCheckbox = React.forwardRef<
//   HTMLInputElement,
//   React.ComponentPropsWithoutRef<"input">
// >(({ ...props }, ref) => {
//   return (
//     <input
//       type="checkbox"
//       ref={ref}
//       {...props}
//       css={{
//         opacity: 0,
//         width: 0,
//         height: 0,
//         position: "absolute",
//       }}
//     />
//   );
// });

const toggleElementStyles = (theme: Theme) => css`
  display: inline-block;
  position: relative;
  width: ${theme.size[32]};
  height: ${theme.size[16]};
  background-color: ${theme.mode === "dark"
    ? theme.color.gray[80]
    : theme.color.gray[20]};
  border-radius: ${theme.size[8]};
  transition: background-color 0.2s;

  &::before {
    content: "";
    position: absolute;
    width: ${theme.size[12]};
    height: ${theme.size[12]};
    left: ${theme.size[2]};
    bottom: ${theme.size[2]};
    background-color: ${theme.mode === "light"
      ? theme.color.gray[100]
      : theme.color.gray[0]};
    border-radius: 50%;
    transition: transform 0.2s;
  }

  input:checked + & {
    background-color: ${theme.mode === "light"
      ? theme.color.gray[100]
      : theme.color.gray[0]};

    &::before {
      transform: translateX(${theme.size[16]});
      background-color: ${theme.mode === "light"
        ? theme.color.gray[20]
        : theme.color.gray[80]};
    }
  }

  input:focus + & {
    box-shadow: ${theme.mode === "light"
      ? theme.shadow.low.light
      : theme.shadow.low.dark};
  }
`;

const ToggleElement = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => {
  return (
    <div
      css={(theme: Theme) => [toggleElementStyles(theme)]}
      ref={ref}
      {...props}
    />
  );
});

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onCheckedChange,
  label,
  ...rest
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCheckedChange(event.target.checked);
  };

  return (
    <label
      htmlFor={label?.toString()}
      css={(theme: Theme) => [toggleStyles(theme)]}
      {...rest}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="sr-only"
        id={label?.toString()}
      />
      <ToggleElement />
      {label}
    </label>
  );
};
