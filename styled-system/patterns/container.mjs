import { getPatternStyles, patternFns } from '../helpers.mjs';
import { css } from '../css/index.mjs';

const containerConfig = {
transform(props) {
  return Object.assign(
    {
      position: "relative",
      width: "100%",
      maxWidth: "7xl",
      mx: "auto",
      px: { base: "24", md: "20", sm: "16" }
    },
    props
  );
}}

export const getContainerStyle = (styles = {}) => {
  const _styles = getPatternStyles(containerConfig, styles)
  return containerConfig.transform(_styles, patternFns)
}

export const container = (styles) => css(getContainerStyle(styles))
container.raw = getContainerStyle