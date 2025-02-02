import styled from "@emotion/styled";
import { themeHelper, sxPropHelper, StyleProps } from "~/utils/styled";
import { modes } from "~/utils/theme";

interface TextProps extends StyleProps {
  level?: 1 | 2 | 2.5 | 3 | 4 | 5 | 6 | 7 | 8;
  font?: "default" | "mono";
}

const Text = styled.p<TextProps>(
  ({ level = 3, font = "default", ...props }) =>
    themeHelper({
      fontSize: level,
      lineHeight: "5",
      fontFamily: font,
      fontWeight: "normal",
      color: props.theme?.mode === modes.dark ? "gray.2" : "gray.60",
    })(props),
  sxPropHelper
);

export default Text;
