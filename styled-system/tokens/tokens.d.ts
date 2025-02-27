/* eslint-disable */
export type Token = "aspectRatios.square" | "aspectRatios.landscape" | "aspectRatios.portrait" | "aspectRatios.wide" | "aspectRatios.ultrawide" | "aspectRatios.golden" | "borders.none" | "shadows.low" | "shadows.medium" | "shadows.high" | "shadows.inset" | "easings.default" | "easings.linear" | "easings.in" | "easings.out" | "easings.in-out" | "durations.fastest" | "durations.faster" | "durations.fast" | "durations.normal" | "durations.slow" | "durations.slower" | "durations.slowest" | "letterSpacings.tighter" | "letterSpacings.tight" | "letterSpacings.normal" | "letterSpacings.wide" | "letterSpacings.wider" | "letterSpacings.widest" | "lineHeights.none" | "lineHeights.tighter" | "lineHeights.tight" | "lineHeights.default" | "lineHeights.loose" | "lineHeights.looser" | "blurs.sm" | "blurs.base" | "blurs.md" | "blurs.lg" | "blurs.xl" | "blurs.2xl" | "blurs.3xl" | "animations.spin" | "animations.ping" | "animations.pulse" | "animations.bounce" | "colors.transparent" | "colors.current" | "colors.gray.0" | "colors.gray.1" | "colors.gray.2" | "colors.gray.3" | "colors.gray.4" | "colors.gray.5" | "colors.gray.10" | "colors.gray.20" | "colors.gray.30" | "colors.gray.40" | "colors.gray.50" | "colors.gray.60" | "colors.gray.70" | "colors.gray.80" | "colors.gray.90" | "colors.gray.92" | "colors.gray.94" | "colors.gray.96" | "colors.gray.98" | "colors.gray.100" | "colors.blue.5" | "colors.blue.10" | "colors.blue.20" | "colors.blue.30" | "colors.blue.40" | "colors.blue.50" | "colors.blue.60" | "colors.blue.70" | "colors.blue.80" | "colors.blue.90" | "colors.mint.5" | "colors.mint.10" | "colors.mint.20" | "colors.mint.30" | "colors.mint.40" | "colors.mint.50" | "colors.mint.60" | "colors.mint.70" | "colors.mint.80" | "colors.cyan.5" | "colors.cyan.10" | "colors.cyan.20" | "colors.cyan.30" | "colors.cyan.40" | "colors.cyan.50" | "colors.cyan.60" | "colors.cyan.70" | "colors.cyan.80" | "colors.cyan.90" | "colors.red.5" | "colors.red.10" | "colors.red.20" | "colors.red.30" | "colors.red.40" | "colors.red.50" | "colors.red.60" | "colors.red.70" | "colors.red.80" | "colors.orange.5" | "colors.orange.10" | "colors.orange.20" | "colors.orange.30" | "colors.orange.40" | "colors.orange.50" | "colors.orange.60" | "colors.orange.70" | "colors.orange.80" | "colors.yellow.1" | "colors.yellow.2" | "colors.yellow.3" | "colors.yellow.4" | "colors.yellow.5" | "colors.yellow.10" | "colors.yellow.20" | "colors.yellow.30" | "colors.yellow.40" | "colors.yellow.50" | "colors.yellow.60" | "colors.yellow.70" | "colors.yellow.80" | "colors.yellow.90" | "colors.gold.1" | "colors.gold.2" | "colors.gold.3" | "colors.gold.4" | "colors.gold.5" | "colors.gold.10" | "colors.gold.20" | "colors.gold.30" | "colors.gold.40" | "colors.gold.50" | "colors.gold.60" | "colors.gold.70" | "colors.gold.80" | "colors.gold.90" | "colors.green.1" | "colors.green.2" | "colors.green.3" | "colors.green.4" | "colors.green.5" | "colors.green.10" | "colors.green.20" | "colors.green.30" | "colors.green.40" | "colors.green.50" | "colors.green.60" | "colors.green.70" | "colors.green.80" | "colors.green.90" | "colors.indigo.5" | "colors.indigo.10" | "colors.indigo.20" | "colors.indigo.30" | "colors.indigo.40" | "colors.indigo.50" | "colors.indigo.60" | "colors.indigo.70" | "colors.indigo.80" | "colors.tan.5" | "colors.tan.10" | "colors.tan.20" | "colors.tan.30" | "colors.tan.40" | "colors.tan.50" | "colors.tan.60" | "colors.tan.70" | "colors.tan.80" | "colors.tan.90" | "fonts.sans" | "fonts.serif" | "fonts.mono" | "fontSizes.12" | "fontSizes.14" | "fontSizes.16" | "fontSizes.20" | "fontSizes.24" | "fontSizes.32" | "fontSizes.40" | "fontSizes.48" | "fontSizes.64" | "fontSizes.72" | "fontSizes.80" | "fontSizes.96" | "fontWeights.light" | "fontWeights.normal" | "fontWeights.medium" | "fontWeights.bold" | "fontWeights.black" | "sizes.0" | "sizes.1" | "sizes.2" | "sizes.3" | "sizes.4" | "sizes.5" | "sizes.6" | "sizes.7" | "sizes.8" | "sizes.9" | "sizes.10" | "sizes.12" | "sizes.14" | "sizes.16" | "sizes.20" | "sizes.22" | "sizes.24" | "sizes.32" | "sizes.40" | "sizes.48" | "sizes.56" | "sizes.64" | "sizes.72" | "sizes.80" | "sizes.96" | "sizes.full" | "sizes.min" | "sizes.max" | "sizes.fit" | "sizes.xs" | "sizes.sm" | "sizes.md" | "sizes.lg" | "sizes.xl" | "sizes.2xl" | "sizes.3xl" | "sizes.4xl" | "sizes.5xl" | "sizes.6xl" | "sizes.7xl" | "sizes.8xl" | "sizes.prose" | "sizes.breakpoint-xs" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "spacing.0" | "spacing.1" | "spacing.2" | "spacing.3" | "spacing.4" | "spacing.5" | "spacing.6" | "spacing.7" | "spacing.8" | "spacing.9" | "spacing.10" | "spacing.12" | "spacing.14" | "spacing.16" | "spacing.20" | "spacing.22" | "spacing.24" | "spacing.32" | "spacing.40" | "spacing.48" | "spacing.56" | "spacing.64" | "spacing.72" | "spacing.80" | "spacing.96" | "spacing.full" | "spacing.min" | "spacing.max" | "spacing.fit" | "spacing.xs" | "spacing.sm" | "spacing.md" | "spacing.lg" | "spacing.xl" | "spacing.2xl" | "spacing.3xl" | "spacing.4xl" | "spacing.5xl" | "spacing.6xl" | "spacing.7xl" | "spacing.8xl" | "spacing.prose" | "radii.0" | "radii.1" | "radii.2" | "radii.4" | "radii.8" | "radii.16" | "radii.100" | "breakpoints.xs" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "colors.utility.shadowColor" | "spacing.-0" | "spacing.-1" | "spacing.-2" | "spacing.-3" | "spacing.-4" | "spacing.-5" | "spacing.-6" | "spacing.-7" | "spacing.-8" | "spacing.-9" | "spacing.-10" | "spacing.-12" | "spacing.-14" | "spacing.-16" | "spacing.-20" | "spacing.-22" | "spacing.-24" | "spacing.-32" | "spacing.-40" | "spacing.-48" | "spacing.-56" | "spacing.-64" | "spacing.-72" | "spacing.-80" | "spacing.-96" | "spacing.-full" | "spacing.-min" | "spacing.-max" | "spacing.-fit" | "spacing.-xs" | "spacing.-sm" | "spacing.-md" | "spacing.-lg" | "spacing.-xl" | "spacing.-2xl" | "spacing.-3xl" | "spacing.-4xl" | "spacing.-5xl" | "spacing.-6xl" | "spacing.-7xl" | "spacing.-8xl" | "spacing.-prose" | "colors.colorPalette" | "colors.colorPalette.0" | "colors.colorPalette.1" | "colors.colorPalette.2" | "colors.colorPalette.3" | "colors.colorPalette.4" | "colors.colorPalette.5" | "colors.colorPalette.10" | "colors.colorPalette.20" | "colors.colorPalette.30" | "colors.colorPalette.40" | "colors.colorPalette.50" | "colors.colorPalette.60" | "colors.colorPalette.70" | "colors.colorPalette.80" | "colors.colorPalette.90" | "colors.colorPalette.92" | "colors.colorPalette.94" | "colors.colorPalette.96" | "colors.colorPalette.98" | "colors.colorPalette.100" | "colors.colorPalette.shadowColor"

export type ColorPalette = "transparent" | "current" | "gray" | "blue" | "mint" | "cyan" | "red" | "orange" | "yellow" | "gold" | "green" | "indigo" | "tan" | "utility"

export type AspectRatioToken = "square" | "landscape" | "portrait" | "wide" | "ultrawide" | "golden"

export type BorderToken = "none"

export type ShadowToken = "low" | "medium" | "high" | "inset"

export type EasingToken = "default" | "linear" | "in" | "out" | "in-out"

export type DurationToken = "fastest" | "faster" | "fast" | "normal" | "slow" | "slower" | "slowest"

export type LetterSpacingToken = "tighter" | "tight" | "normal" | "wide" | "wider" | "widest"

export type LineHeightToken = "none" | "tighter" | "tight" | "default" | "loose" | "looser"

export type BlurToken = "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl"

export type AnimationToken = "spin" | "ping" | "pulse" | "bounce"

export type ColorToken = "transparent" | "current" | "gray.0" | "gray.1" | "gray.2" | "gray.3" | "gray.4" | "gray.5" | "gray.10" | "gray.20" | "gray.30" | "gray.40" | "gray.50" | "gray.60" | "gray.70" | "gray.80" | "gray.90" | "gray.92" | "gray.94" | "gray.96" | "gray.98" | "gray.100" | "blue.5" | "blue.10" | "blue.20" | "blue.30" | "blue.40" | "blue.50" | "blue.60" | "blue.70" | "blue.80" | "blue.90" | "mint.5" | "mint.10" | "mint.20" | "mint.30" | "mint.40" | "mint.50" | "mint.60" | "mint.70" | "mint.80" | "cyan.5" | "cyan.10" | "cyan.20" | "cyan.30" | "cyan.40" | "cyan.50" | "cyan.60" | "cyan.70" | "cyan.80" | "cyan.90" | "red.5" | "red.10" | "red.20" | "red.30" | "red.40" | "red.50" | "red.60" | "red.70" | "red.80" | "orange.5" | "orange.10" | "orange.20" | "orange.30" | "orange.40" | "orange.50" | "orange.60" | "orange.70" | "orange.80" | "yellow.1" | "yellow.2" | "yellow.3" | "yellow.4" | "yellow.5" | "yellow.10" | "yellow.20" | "yellow.30" | "yellow.40" | "yellow.50" | "yellow.60" | "yellow.70" | "yellow.80" | "yellow.90" | "gold.1" | "gold.2" | "gold.3" | "gold.4" | "gold.5" | "gold.10" | "gold.20" | "gold.30" | "gold.40" | "gold.50" | "gold.60" | "gold.70" | "gold.80" | "gold.90" | "green.1" | "green.2" | "green.3" | "green.4" | "green.5" | "green.10" | "green.20" | "green.30" | "green.40" | "green.50" | "green.60" | "green.70" | "green.80" | "green.90" | "indigo.5" | "indigo.10" | "indigo.20" | "indigo.30" | "indigo.40" | "indigo.50" | "indigo.60" | "indigo.70" | "indigo.80" | "tan.5" | "tan.10" | "tan.20" | "tan.30" | "tan.40" | "tan.50" | "tan.60" | "tan.70" | "tan.80" | "tan.90" | "utility.shadowColor" | "colorPalette" | "colorPalette.0" | "colorPalette.1" | "colorPalette.2" | "colorPalette.3" | "colorPalette.4" | "colorPalette.5" | "colorPalette.10" | "colorPalette.20" | "colorPalette.30" | "colorPalette.40" | "colorPalette.50" | "colorPalette.60" | "colorPalette.70" | "colorPalette.80" | "colorPalette.90" | "colorPalette.92" | "colorPalette.94" | "colorPalette.96" | "colorPalette.98" | "colorPalette.100" | "colorPalette.shadowColor"

export type FontToken = "sans" | "serif" | "mono"

export type FontSizeToken = "12" | "14" | "16" | "20" | "24" | "32" | "40" | "48" | "64" | "72" | "80" | "96"

export type FontWeightToken = "light" | "normal" | "medium" | "bold" | "black"

export type SizeToken = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "12" | "14" | "16" | "20" | "22" | "24" | "32" | "40" | "48" | "56" | "64" | "72" | "80" | "96" | "full" | "min" | "max" | "fit" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "prose" | "breakpoint-xs" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type SpacingToken = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "12" | "14" | "16" | "20" | "22" | "24" | "32" | "40" | "48" | "56" | "64" | "72" | "80" | "96" | "full" | "min" | "max" | "fit" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "prose" | "-0" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6" | "-7" | "-8" | "-9" | "-10" | "-12" | "-14" | "-16" | "-20" | "-22" | "-24" | "-32" | "-40" | "-48" | "-56" | "-64" | "-72" | "-80" | "-96" | "-full" | "-min" | "-max" | "-fit" | "-xs" | "-sm" | "-md" | "-lg" | "-xl" | "-2xl" | "-3xl" | "-4xl" | "-5xl" | "-6xl" | "-7xl" | "-8xl" | "-prose"

export type RadiusToken = "0" | "1" | "2" | "4" | "8" | "16" | "100"

export type BreakpointToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

export type Tokens = {
		aspectRatios: AspectRatioToken
		borders: BorderToken
		shadows: ShadowToken
		easings: EasingToken
		durations: DurationToken
		letterSpacings: LetterSpacingToken
		lineHeights: LineHeightToken
		blurs: BlurToken
		animations: AnimationToken
		colors: ColorToken
		fonts: FontToken
		fontSizes: FontSizeToken
		fontWeights: FontWeightToken
		sizes: SizeToken
		spacing: SpacingToken
		radii: RadiusToken
		breakpoints: BreakpointToken
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "cursor" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"