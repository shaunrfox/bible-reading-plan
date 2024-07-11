import styled from "@emotion/styled";
import { themeHelper } from "~/utils/styled";
import { Link, LinkProps } from "@remix-run/react";
import { modes } from "~/utils/theme";
import type { SystemStyleObject } from "@styled-system/css";

const myLinkStyles = ({
  ...props
}: LinkProps & { theme?: { mode?: string } }): SystemStyleObject => {
  const mode = props.theme?.mode ?? modes.light;

  const styleObject: SystemStyleObject = {
    color: mode === modes.dark ? "gray.5" : "gray.80",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderColor: "transparent",
    textDecoration: "none",
    "&:hover": {
      color: mode === modes.dark ? "blue.20" : "blue.60",
      borderColor: mode === modes.dark ? "blue.20" : "blue.60",
    },
  };

  return themeHelper({ ...styleObject })(props);
};

const MyLink = styled(Link)<LinkProps>(myLinkStyles);

export default MyLink;
