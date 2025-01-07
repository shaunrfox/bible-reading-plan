import styled from "@emotion/styled";
import { themeHelper, sxPropHelper, StyleProps } from "~/utils/styled";
import { modes } from "~/utils/theme";

export type IconProps = StyleProps & {
  width?: "24px";
  height?: "24px";
  viewBox?: "0 0 24 24";
  xmlns?: "http://www.w3.org/2000/svg";
};

const baseStyles = (props: IconProps) => {
  const mode = props.theme?.mode ?? modes.light;

  return themeHelper({
    width: "24px",
    height: "24px",
    fill: mode === modes.dark ? "gray.5" : "gray.80",
    flexShrink: 0,
  })(props);
};

const Icon = styled.svg<IconProps>(baseStyles, sxPropHelper);

export default Icon;
