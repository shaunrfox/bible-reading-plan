// /** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import React from "react";

import { Button, ButtonProps } from "./Button";
import { Rule } from "./Rule";
import { Text } from "./Text";

export interface MenuItemProps extends ButtonProps {
  isActive?: boolean;
  disabled?: boolean;
  itemType?: "singleSelect" | "action" | "subheader" | "divider";
  className?: string;
}

const menuItemStyles = (
  theme: Theme,
  isActive: boolean,
  disabled: boolean
) => css`
  justify-content: flex-start;
  width: 100%;
  [data-state="open"] {
    & > svg {
      rotate: 180deg;
    }
  }
  background-color: ${theme.mode === "light"
    ? theme.color.gray[0]
    : theme.color.gray[80]};
  ${isActive &&
  css`
    background-color: ${theme.color.gray[10]};
  `}
  [data-highlighted] {
    background-color: ${theme.color.gray[10]};
  }
  ${isActive &&
  !disabled &&
  css`
    background-color: ${theme.color.gray[70]};
  `}
  ${disabled &&
  css`
    opacity: 0.4;
    cursor: "not-allowed";
  `}
`;

export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  (
    { children, isActive, onClick, disabled, className, itemType, ...props },
    ref
  ) => {
    if (itemType === "divider") {
      return <Rule {...props} />;
    }

    if (itemType === "subheader") {
      return (
        <Text
          as="span"
          level={16}
          css={(theme) => [
            css`
              color: ${theme.mode === "light"
                ? theme.color.gray[30]
                : theme.color.gray[40]};
              font-size: ${theme.size[2]};
              grid-column: 1 / -1;
              padding-left: ${theme.size[4]};
              padding-bottom: ${theme.size[3]};
              padding-top: ${theme.size[5]};
              &:first-of-type {
                padding-top: ${theme.size[3]};
              }
              font-weight: ${theme.fontWeight.bold};
              text-transform: "uppercase";
              letter-spacing: "0.05em";
              user-select: "none";
            `,
          ]}
          className={className}
          {...props}
        >
          {children}
        </Text>
      );
    }

    return (
      <Button
        ref={ref}
        disabled={disabled}
        onClick={onClick}
        isActive={isActive}
        css={(theme) => [
          menuItemStyles(theme, isActive ?? false, disabled ?? false),
        ]}
        className={`${className || ""} ${isActive ? "isActive" : ""}`}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

MenuItem.displayName = "MenuItem";
