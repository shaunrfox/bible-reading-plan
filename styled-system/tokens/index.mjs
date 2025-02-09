const tokens = {
  "aspectRatios.square": {
    "value": "1 / 1",
    "variable": "var(--aspect-ratios-square)"
  },
  "aspectRatios.landscape": {
    "value": "4 / 3",
    "variable": "var(--aspect-ratios-landscape)"
  },
  "aspectRatios.portrait": {
    "value": "3 / 4",
    "variable": "var(--aspect-ratios-portrait)"
  },
  "aspectRatios.wide": {
    "value": "16 / 9",
    "variable": "var(--aspect-ratios-wide)"
  },
  "aspectRatios.ultrawide": {
    "value": "18 / 5",
    "variable": "var(--aspect-ratios-ultrawide)"
  },
  "aspectRatios.golden": {
    "value": "1.618 / 1",
    "variable": "var(--aspect-ratios-golden)"
  },
  "borders.none": {
    "value": "none",
    "variable": "var(--borders-none)"
  },
  "shadows.low": {
    "value": "0px 1px 1px var(--colors-utility-shadow-color), 0px 2px 2px var(--colors-utility-shadow-color)",
    "variable": "var(--shadows-low)"
  },
  "shadows.medium": {
    "value": "0px 2px 2px var(--colors-utility-shadow-color), 0px 4px 4px var(--colors-utility-shadow-color), 0px 8px 8px var(--colors-utility-shadow-color)",
    "variable": "var(--shadows-medium)"
  },
  "shadows.high": {
    "value": "0px 2px 2px var(--colors-utility-shadow-color), 0px 4px 4px var(--colors-utility-shadow-color), 0px 8px 8px var(--colors-utility-shadow-color), 0px 16px 16px var(--colors-utility-shadow-color)",
    "variable": "var(--shadows-high)"
  },
  "shadows.inset": {
    "value": "inset 0px 2px 1px var(--colors-utility-shadow-color), inset 0px 3px 2px var(--colors-utility-shadow-color)",
    "variable": "var(--shadows-inset)"
  },
  "easings.default": {
    "value": "cubic-bezier(0.4, 0, 0.2, 1)",
    "variable": "var(--easings-default)"
  },
  "easings.linear": {
    "value": "linear",
    "variable": "var(--easings-linear)"
  },
  "easings.in": {
    "value": "cubic-bezier(0.4, 0, 1, 1)",
    "variable": "var(--easings-in)"
  },
  "easings.out": {
    "value": "cubic-bezier(0, 0, 0.2, 1)",
    "variable": "var(--easings-out)"
  },
  "easings.in-out": {
    "value": "cubic-bezier(0.4, 0, 0.2, 1)",
    "variable": "var(--easings-in-out)"
  },
  "durations.fastest": {
    "value": "50ms",
    "variable": "var(--durations-fastest)"
  },
  "durations.faster": {
    "value": "100ms",
    "variable": "var(--durations-faster)"
  },
  "durations.fast": {
    "value": "150ms",
    "variable": "var(--durations-fast)"
  },
  "durations.normal": {
    "value": "200ms",
    "variable": "var(--durations-normal)"
  },
  "durations.slow": {
    "value": "300ms",
    "variable": "var(--durations-slow)"
  },
  "durations.slower": {
    "value": "400ms",
    "variable": "var(--durations-slower)"
  },
  "durations.slowest": {
    "value": "500ms",
    "variable": "var(--durations-slowest)"
  },
  "letterSpacings.tighter": {
    "value": "-0.05em",
    "variable": "var(--letter-spacings-tighter)"
  },
  "letterSpacings.tight": {
    "value": "-0.025em",
    "variable": "var(--letter-spacings-tight)"
  },
  "letterSpacings.normal": {
    "value": "0em",
    "variable": "var(--letter-spacings-normal)"
  },
  "letterSpacings.wide": {
    "value": "0.025em",
    "variable": "var(--letter-spacings-wide)"
  },
  "letterSpacings.wider": {
    "value": "0.05em",
    "variable": "var(--letter-spacings-wider)"
  },
  "letterSpacings.widest": {
    "value": "0.1em",
    "variable": "var(--letter-spacings-widest)"
  },
  "lineHeights.none": {
    "value": "1",
    "variable": "var(--line-heights-none)"
  },
  "lineHeights.tighter": {
    "value": "1em + 0.125rem",
    "variable": "var(--line-heights-tighter)"
  },
  "lineHeights.tight": {
    "value": "1em + 0.25rem",
    "variable": "var(--line-heights-tight)"
  },
  "lineHeights.default": {
    "value": "1em + 0.5rem",
    "variable": "var(--line-heights-default)"
  },
  "lineHeights.loose": {
    "value": "1em + 0.75rem",
    "variable": "var(--line-heights-loose)"
  },
  "lineHeights.looser": {
    "value": "1em + 0.875rem",
    "variable": "var(--line-heights-looser)"
  },
  "blurs.sm": {
    "value": "4px",
    "variable": "var(--blurs-sm)"
  },
  "blurs.base": {
    "value": "8px",
    "variable": "var(--blurs-base)"
  },
  "blurs.md": {
    "value": "12px",
    "variable": "var(--blurs-md)"
  },
  "blurs.lg": {
    "value": "16px",
    "variable": "var(--blurs-lg)"
  },
  "blurs.xl": {
    "value": "24px",
    "variable": "var(--blurs-xl)"
  },
  "blurs.2xl": {
    "value": "40px",
    "variable": "var(--blurs-2xl)"
  },
  "blurs.3xl": {
    "value": "64px",
    "variable": "var(--blurs-3xl)"
  },
  "animations.spin": {
    "value": "spin 1s linear infinite",
    "variable": "var(--animations-spin)"
  },
  "animations.ping": {
    "value": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    "variable": "var(--animations-ping)"
  },
  "animations.pulse": {
    "value": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    "variable": "var(--animations-pulse)"
  },
  "animations.bounce": {
    "value": "bounce 1s infinite",
    "variable": "var(--animations-bounce)"
  },
  "colors.transparent": {
    "value": "transparent",
    "variable": "var(--colors-transparent)"
  },
  "colors.current": {
    "value": "currentColor",
    "variable": "var(--colors-current)"
  },
  "colors.gray.0": {
    "value": "#FFFFFF",
    "variable": "var(--colors-gray-0)"
  },
  "colors.gray.1": {
    "value": "#FBFCFD",
    "variable": "var(--colors-gray-1)"
  },
  "colors.gray.2": {
    "value": "#F7F9FA",
    "variable": "var(--colors-gray-2)"
  },
  "colors.gray.3": {
    "value": "#F5F6F7",
    "variable": "var(--colors-gray-3)"
  },
  "colors.gray.4": {
    "value": "#F1F3F6",
    "variable": "var(--colors-gray-4)"
  },
  "colors.gray.5": {
    "value": "#EDEFF0",
    "variable": "var(--colors-gray-5)"
  },
  "colors.gray.10": {
    "value": "#DFE1E2",
    "variable": "var(--colors-gray-10)"
  },
  "colors.gray.20": {
    "value": "#C6CACE",
    "variable": "var(--colors-gray-20)"
  },
  "colors.gray.30": {
    "value": "#A9AEB1",
    "variable": "var(--colors-gray-30)"
  },
  "colors.gray.40": {
    "value": "#8D9297",
    "variable": "var(--colors-gray-40)"
  },
  "colors.gray.50": {
    "value": "#71767A",
    "variable": "var(--colors-gray-50)"
  },
  "colors.gray.60": {
    "value": "#565C65",
    "variable": "var(--colors-gray-60)"
  },
  "colors.gray.70": {
    "value": "#3D4551",
    "variable": "var(--colors-gray-70)"
  },
  "colors.gray.80": {
    "value": "#2D2E2F",
    "variable": "var(--colors-gray-80)"
  },
  "colors.gray.90": {
    "value": "#1C1D1F",
    "variable": "var(--colors-gray-90)"
  },
  "colors.gray.100": {
    "value": "#000000",
    "variable": "var(--colors-gray-100)"
  },
  "colors.blue.5": {
    "value": "#E8F5FF",
    "variable": "var(--colors-blue-5)"
  },
  "colors.blue.10": {
    "value": "#CFE8FF",
    "variable": "var(--colors-blue-10)"
  },
  "colors.blue.20": {
    "value": "#A1D3FF",
    "variable": "var(--colors-blue-20)"
  },
  "colors.blue.30": {
    "value": "#58B4FF",
    "variable": "var(--colors-blue-30)"
  },
  "colors.blue.40": {
    "value": "#2491FF",
    "variable": "var(--colors-blue-40)"
  },
  "colors.blue.50": {
    "value": "#0076DA",
    "variable": "var(--colors-blue-50)"
  },
  "colors.blue.60": {
    "value": "#005EA2",
    "variable": "var(--colors-blue-60)"
  },
  "colors.blue.70": {
    "value": "#0B4778",
    "variable": "var(--colors-blue-70)"
  },
  "colors.blue.80": {
    "value": "#112F4E",
    "variable": "var(--colors-blue-80)"
  },
  "colors.blue.90": {
    "value": "#11181D",
    "variable": "var(--colors-blue-90)"
  },
  "colors.mint.5": {
    "value": "#D5FBF3",
    "variable": "var(--colors-mint-5)"
  },
  "colors.mint.10": {
    "value": "#7EFBE1",
    "variable": "var(--colors-mint-10)"
  },
  "colors.mint.20": {
    "value": "#29E1CB",
    "variable": "var(--colors-mint-20)"
  },
  "colors.mint.30": {
    "value": "#1DC2AE",
    "variable": "var(--colors-mint-30)"
  },
  "colors.mint.40": {
    "value": "#00A398",
    "variable": "var(--colors-mint-40)"
  },
  "colors.mint.50": {
    "value": "#008480",
    "variable": "var(--colors-mint-50)"
  },
  "colors.mint.60": {
    "value": "#0F6460",
    "variable": "var(--colors-mint-60)"
  },
  "colors.mint.70": {
    "value": "#0B4B3F",
    "variable": "var(--colors-mint-70)"
  },
  "colors.mint.80": {
    "value": "#123131",
    "variable": "var(--colors-mint-80)"
  },
  "colors.cyan.5": {
    "value": "#E7F6F8",
    "variable": "var(--colors-cyan-5)"
  },
  "colors.cyan.10": {
    "value": "#CCECF2",
    "variable": "var(--colors-cyan-10)"
  },
  "colors.cyan.20": {
    "value": "#99DEEA",
    "variable": "var(--colors-cyan-20)"
  },
  "colors.cyan.30": {
    "value": "#5DC0D1",
    "variable": "var(--colors-cyan-30)"
  },
  "colors.cyan.40": {
    "value": "#449DAC",
    "variable": "var(--colors-cyan-40)"
  },
  "colors.cyan.50": {
    "value": "#168092",
    "variable": "var(--colors-cyan-50)"
  },
  "colors.cyan.60": {
    "value": "#2A646D",
    "variable": "var(--colors-cyan-60)"
  },
  "colors.cyan.70": {
    "value": "#2C4A4E",
    "variable": "var(--colors-cyan-70)"
  },
  "colors.cyan.80": {
    "value": "#203133",
    "variable": "var(--colors-cyan-80)"
  },
  "colors.cyan.90": {
    "value": "#111819",
    "variable": "var(--colors-cyan-90)"
  },
  "colors.red.5": {
    "value": "#FFF3F2",
    "variable": "var(--colors-red-5)"
  },
  "colors.red.10": {
    "value": "#FDE0DB",
    "variable": "var(--colors-red-10)"
  },
  "colors.red.20": {
    "value": "#FDB8AE",
    "variable": "var(--colors-red-20)"
  },
  "colors.red.30": {
    "value": "#FF8D7B",
    "variable": "var(--colors-red-30)"
  },
  "colors.red.40": {
    "value": "#FB5A47",
    "variable": "var(--colors-red-40)"
  },
  "colors.red.50": {
    "value": "#E52207",
    "variable": "var(--colors-red-50)"
  },
  "colors.red.60": {
    "value": "#B50909",
    "variable": "var(--colors-red-60)"
  },
  "colors.red.70": {
    "value": "#8B0A03",
    "variable": "var(--colors-red-70)"
  },
  "colors.red.80": {
    "value": "#5C1111",
    "variable": "var(--colors-red-80)"
  },
  "colors.orange.5": {
    "value": "#fef2e4",
    "variable": "var(--colors-orange-5)"
  },
  "colors.orange.10": {
    "value": "#fce2c5",
    "variable": "var(--colors-orange-10)"
  },
  "colors.orange.20": {
    "value": "#ffbc78",
    "variable": "var(--colors-orange-20)"
  },
  "colors.orange.30": {
    "value": "#fa9441",
    "variable": "var(--colors-orange-30)"
  },
  "colors.orange.40": {
    "value": "#e66f0e",
    "variable": "var(--colors-orange-40)"
  },
  "colors.orange.50": {
    "value": "#c05600",
    "variable": "var(--colors-orange-50)"
  },
  "colors.orange.60": {
    "value": "#8c471c",
    "variable": "var(--colors-orange-60)"
  },
  "colors.orange.70": {
    "value": "#5f3617",
    "variable": "var(--colors-orange-70)"
  },
  "colors.orange.80": {
    "value": "#352313",
    "variable": "var(--colors-orange-80)"
  },
  "colors.yellow.1": {
    "value": "#FFFDF3",
    "variable": "var(--colors-yellow-1)"
  },
  "colors.yellow.2": {
    "value": "#FFFBE7",
    "variable": "var(--colors-yellow-2)"
  },
  "colors.yellow.3": {
    "value": "#FFF9DA",
    "variable": "var(--colors-yellow-3)"
  },
  "colors.yellow.4": {
    "value": "#FFF7CE",
    "variable": "var(--colors-yellow-4)"
  },
  "colors.yellow.5": {
    "value": "#FFF5C2",
    "variable": "var(--colors-yellow-5)"
  },
  "colors.yellow.10": {
    "value": "#FEE685",
    "variable": "var(--colors-yellow-10)"
  },
  "colors.yellow.20": {
    "value": "#FACE00",
    "variable": "var(--colors-yellow-20)"
  },
  "colors.yellow.30": {
    "value": "#DDAA01",
    "variable": "var(--colors-yellow-30)"
  },
  "colors.yellow.40": {
    "value": "#B38C00",
    "variable": "var(--colors-yellow-40)"
  },
  "colors.yellow.50": {
    "value": "#947100",
    "variable": "var(--colors-yellow-50)"
  },
  "colors.yellow.60": {
    "value": "#776017",
    "variable": "var(--colors-yellow-60)"
  },
  "colors.yellow.70": {
    "value": "#5C4809",
    "variable": "var(--colors-yellow-70)"
  },
  "colors.yellow.80": {
    "value": "#422D19",
    "variable": "var(--colors-yellow-80)"
  },
  "colors.yellow.90": {
    "value": "#1C0B00",
    "variable": "var(--colors-yellow-90)"
  },
  "colors.gold.1": {
    "value": "#FFFCF4",
    "variable": "var(--colors-gold-1)"
  },
  "colors.gold.2": {
    "value": "#FFF9E9",
    "variable": "var(--colors-gold-2)"
  },
  "colors.gold.3": {
    "value": "#FEF6DE",
    "variable": "var(--colors-gold-3)"
  },
  "colors.gold.4": {
    "value": "#FEF3D3",
    "variable": "var(--colors-gold-4)"
  },
  "colors.gold.5": {
    "value": "#FEF0C8",
    "variable": "var(--colors-gold-5)"
  },
  "colors.gold.10": {
    "value": "#FFE396",
    "variable": "var(--colors-gold-10)"
  },
  "colors.gold.20": {
    "value": "#FFBE2E",
    "variable": "var(--colors-gold-20)"
  },
  "colors.gold.30": {
    "value": "#E5A000",
    "variable": "var(--colors-gold-30)"
  },
  "colors.gold.40": {
    "value": "#C2850C",
    "variable": "var(--colors-gold-40)"
  },
  "colors.gold.50": {
    "value": "#936F38",
    "variable": "var(--colors-gold-50)"
  },
  "colors.gold.60": {
    "value": "#7A591A",
    "variable": "var(--colors-gold-60)"
  },
  "colors.gold.70": {
    "value": "#5C410A",
    "variable": "var(--colors-gold-70)"
  },
  "colors.gold.80": {
    "value": "#3B2B15",
    "variable": "var(--colors-gold-80)"
  },
  "colors.gold.90": {
    "value": "#1E1100",
    "variable": "var(--colors-gold-90)"
  },
  "colors.green.1": {
    "value": "#F8FEF4",
    "variable": "var(--colors-green-1)"
  },
  "colors.green.2": {
    "value": "#F1FDE9",
    "variable": "var(--colors-green-2)"
  },
  "colors.green.3": {
    "value": "#EBFBDD",
    "variable": "var(--colors-green-3)"
  },
  "colors.green.4": {
    "value": "#E4FAD2",
    "variable": "var(--colors-green-4)"
  },
  "colors.green.5": {
    "value": "#DDF9C7",
    "variable": "var(--colors-green-5)"
  },
  "colors.green.10": {
    "value": "#C5EE93",
    "variable": "var(--colors-green-10)"
  },
  "colors.green.20": {
    "value": "#98D035",
    "variable": "var(--colors-green-20)"
  },
  "colors.green.30": {
    "value": "#7FB135",
    "variable": "var(--colors-green-30)"
  },
  "colors.green.40": {
    "value": "#719F2A",
    "variable": "var(--colors-green-40)"
  },
  "colors.green.50": {
    "value": "#538200",
    "variable": "var(--colors-green-50)"
  },
  "colors.green.60": {
    "value": "#466C04",
    "variable": "var(--colors-green-60)"
  },
  "colors.green.70": {
    "value": "#2F4A0B",
    "variable": "var(--colors-green-70)"
  },
  "colors.green.80": {
    "value": "#243413",
    "variable": "var(--colors-green-80)"
  },
  "colors.green.90": {
    "value": "#0D1400",
    "variable": "var(--colors-green-90)"
  },
  "colors.indigo.5": {
    "value": "#f0f0ff",
    "variable": "var(--colors-indigo-5)"
  },
  "colors.indigo.10": {
    "value": "#e0e0ff",
    "variable": "var(--colors-indigo-10)"
  },
  "colors.indigo.20": {
    "value": "#ccceff",
    "variable": "var(--colors-indigo-20)"
  },
  "colors.indigo.30": {
    "value": "#a3a7fa",
    "variable": "var(--colors-indigo-30)"
  },
  "colors.indigo.40": {
    "value": "#8289ff",
    "variable": "var(--colors-indigo-40)"
  },
  "colors.indigo.50": {
    "value": "#656bd7",
    "variable": "var(--colors-indigo-50)"
  },
  "colors.indigo.60": {
    "value": "#4a50c4",
    "variable": "var(--colors-indigo-60)"
  },
  "colors.indigo.70": {
    "value": "#3333a3",
    "variable": "var(--colors-indigo-70)"
  },
  "colors.indigo.80": {
    "value": "#212463",
    "variable": "var(--colors-indigo-80)"
  },
  "colors.tan.5": {
    "value": "#F5F0E6",
    "variable": "var(--colors-tan-5)"
  },
  "colors.tan.10": {
    "value": "#F1E5CD",
    "variable": "var(--colors-tan-10)"
  },
  "colors.tan.20": {
    "value": "#DEC69A",
    "variable": "var(--colors-tan-20)"
  },
  "colors.tan.30": {
    "value": "#C7A97B",
    "variable": "var(--colors-tan-30)"
  },
  "colors.tan.40": {
    "value": "#AD8B65",
    "variable": "var(--colors-tan-40)"
  },
  "colors.tan.50": {
    "value": "#8E704F",
    "variable": "var(--colors-tan-50)"
  },
  "colors.tan.60": {
    "value": "#6B5947",
    "variable": "var(--colors-tan-60)"
  },
  "colors.tan.70": {
    "value": "#4D4438",
    "variable": "var(--colors-tan-70)"
  },
  "colors.tan.80": {
    "value": "#322D26",
    "variable": "var(--colors-tan-80)"
  },
  "colors.tan.90": {
    "value": "#191714",
    "variable": "var(--colors-tan-90)"
  },
  "fonts.sans": {
    "value": "'IBM Plex Sans', Geneva, Tahoma, Verdana, sans-serif",
    "variable": "var(--fonts-sans)"
  },
  "fonts.serif": {
    "value": "'Piazzolla', Georgia, 'Times New Roman', Times, serif",
    "variable": "var(--fonts-serif)"
  },
  "fonts.mono": {
    "value": "'IBM Plex Mono', Andale Mono, monaco, Consolas, Lucida Console, monospace",
    "variable": "var(--fonts-mono)"
  },
  "fontSizes.0": {
    "value": "0",
    "variable": "var(--font-sizes-0)"
  },
  "fontSizes.1": {
    "value": "0.0625rem",
    "variable": "var(--font-sizes-1)"
  },
  "fontSizes.2": {
    "value": "0.125rem",
    "variable": "var(--font-sizes-2)"
  },
  "fontSizes.3": {
    "value": "0.1875rem",
    "variable": "var(--font-sizes-3)"
  },
  "fontSizes.4": {
    "value": "0.25rem",
    "variable": "var(--font-sizes-4)"
  },
  "fontSizes.5": {
    "value": "0.3125rem",
    "variable": "var(--font-sizes-5)"
  },
  "fontSizes.6": {
    "value": "0.375rem",
    "variable": "var(--font-sizes-6)"
  },
  "fontSizes.7": {
    "value": "0.4375rem",
    "variable": "var(--font-sizes-7)"
  },
  "fontSizes.8": {
    "value": "0.5rem",
    "variable": "var(--font-sizes-8)"
  },
  "fontSizes.9": {
    "value": "0.5625rem",
    "variable": "var(--font-sizes-9)"
  },
  "fontSizes.10": {
    "value": "0.625rem",
    "variable": "var(--font-sizes-10)"
  },
  "fontSizes.12": {
    "value": "0.75rem",
    "variable": "var(--font-sizes-12)"
  },
  "fontSizes.14": {
    "value": "0.875rem",
    "variable": "var(--font-sizes-14)"
  },
  "fontSizes.16": {
    "value": "1rem",
    "variable": "var(--font-sizes-16)"
  },
  "fontSizes.20": {
    "value": "1.25rem",
    "variable": "var(--font-sizes-20)"
  },
  "fontSizes.24": {
    "value": "1.5rem",
    "variable": "var(--font-sizes-24)"
  },
  "fontSizes.32": {
    "value": "2rem",
    "variable": "var(--font-sizes-32)"
  },
  "fontSizes.40": {
    "value": "2.5rem",
    "variable": "var(--font-sizes-40)"
  },
  "fontSizes.48": {
    "value": "3rem",
    "variable": "var(--font-sizes-48)"
  },
  "fontSizes.56": {
    "value": "3.5rem",
    "variable": "var(--font-sizes-56)"
  },
  "fontSizes.64": {
    "value": "4rem",
    "variable": "var(--font-sizes-64)"
  },
  "fontSizes.72": {
    "value": "4.5rem",
    "variable": "var(--font-sizes-72)"
  },
  "fontSizes.80": {
    "value": "5rem",
    "variable": "var(--font-sizes-80)"
  },
  "fontSizes.96": {
    "value": "6rem",
    "variable": "var(--font-sizes-96)"
  },
  "fontSizes.full": {
    "value": "100%",
    "variable": "var(--font-sizes-full)"
  },
  "fontSizes.min": {
    "value": "min-content",
    "variable": "var(--font-sizes-min)"
  },
  "fontSizes.max": {
    "value": "max-content",
    "variable": "var(--font-sizes-max)"
  },
  "fontSizes.fit": {
    "value": "fit-content",
    "variable": "var(--font-sizes-fit)"
  },
  "fontSizes.xs": {
    "value": "20rem",
    "variable": "var(--font-sizes-xs)"
  },
  "fontSizes.sm": {
    "value": "24rem",
    "variable": "var(--font-sizes-sm)"
  },
  "fontSizes.md": {
    "value": "28rem",
    "variable": "var(--font-sizes-md)"
  },
  "fontSizes.lg": {
    "value": "32rem",
    "variable": "var(--font-sizes-lg)"
  },
  "fontSizes.xl": {
    "value": "36rem",
    "variable": "var(--font-sizes-xl)"
  },
  "fontSizes.2xl": {
    "value": "42rem",
    "variable": "var(--font-sizes-2xl)"
  },
  "fontSizes.3xl": {
    "value": "48rem",
    "variable": "var(--font-sizes-3xl)"
  },
  "fontSizes.4xl": {
    "value": "56rem",
    "variable": "var(--font-sizes-4xl)"
  },
  "fontSizes.5xl": {
    "value": "64rem",
    "variable": "var(--font-sizes-5xl)"
  },
  "fontSizes.6xl": {
    "value": "72rem",
    "variable": "var(--font-sizes-6xl)"
  },
  "fontSizes.7xl": {
    "value": "80rem",
    "variable": "var(--font-sizes-7xl)"
  },
  "fontSizes.8xl": {
    "value": "90rem",
    "variable": "var(--font-sizes-8xl)"
  },
  "fontSizes.prose": {
    "value": "65ch",
    "variable": "var(--font-sizes-prose)"
  },
  "fontWeights.light": {
    "value": 300,
    "variable": "var(--font-weights-light)"
  },
  "fontWeights.normal": {
    "value": 400,
    "variable": "var(--font-weights-normal)"
  },
  "fontWeights.medium": {
    "value": 500,
    "variable": "var(--font-weights-medium)"
  },
  "fontWeights.bold": {
    "value": 700,
    "variable": "var(--font-weights-bold)"
  },
  "fontWeights.black": {
    "value": 900,
    "variable": "var(--font-weights-black)"
  },
  "sizes.0": {
    "value": "0",
    "variable": "var(--sizes-0)"
  },
  "sizes.1": {
    "value": "0.0625rem",
    "variable": "var(--sizes-1)"
  },
  "sizes.2": {
    "value": "0.125rem",
    "variable": "var(--sizes-2)"
  },
  "sizes.3": {
    "value": "0.1875rem",
    "variable": "var(--sizes-3)"
  },
  "sizes.4": {
    "value": "0.25rem",
    "variable": "var(--sizes-4)"
  },
  "sizes.5": {
    "value": "0.3125rem",
    "variable": "var(--sizes-5)"
  },
  "sizes.6": {
    "value": "0.375rem",
    "variable": "var(--sizes-6)"
  },
  "sizes.7": {
    "value": "0.4375rem",
    "variable": "var(--sizes-7)"
  },
  "sizes.8": {
    "value": "0.5rem",
    "variable": "var(--sizes-8)"
  },
  "sizes.9": {
    "value": "0.5625rem",
    "variable": "var(--sizes-9)"
  },
  "sizes.10": {
    "value": "0.625rem",
    "variable": "var(--sizes-10)"
  },
  "sizes.12": {
    "value": "0.75rem",
    "variable": "var(--sizes-12)"
  },
  "sizes.14": {
    "value": "0.875rem",
    "variable": "var(--sizes-14)"
  },
  "sizes.16": {
    "value": "1rem",
    "variable": "var(--sizes-16)"
  },
  "sizes.20": {
    "value": "1.25rem",
    "variable": "var(--sizes-20)"
  },
  "sizes.24": {
    "value": "1.5rem",
    "variable": "var(--sizes-24)"
  },
  "sizes.32": {
    "value": "2rem",
    "variable": "var(--sizes-32)"
  },
  "sizes.40": {
    "value": "2.5rem",
    "variable": "var(--sizes-40)"
  },
  "sizes.48": {
    "value": "3rem",
    "variable": "var(--sizes-48)"
  },
  "sizes.56": {
    "value": "3.5rem",
    "variable": "var(--sizes-56)"
  },
  "sizes.64": {
    "value": "4rem",
    "variable": "var(--sizes-64)"
  },
  "sizes.72": {
    "value": "4.5rem",
    "variable": "var(--sizes-72)"
  },
  "sizes.80": {
    "value": "5rem",
    "variable": "var(--sizes-80)"
  },
  "sizes.96": {
    "value": "6rem",
    "variable": "var(--sizes-96)"
  },
  "sizes.full": {
    "value": "100%",
    "variable": "var(--sizes-full)"
  },
  "sizes.min": {
    "value": "min-content",
    "variable": "var(--sizes-min)"
  },
  "sizes.max": {
    "value": "max-content",
    "variable": "var(--sizes-max)"
  },
  "sizes.fit": {
    "value": "fit-content",
    "variable": "var(--sizes-fit)"
  },
  "sizes.xs": {
    "value": "20rem",
    "variable": "var(--sizes-xs)"
  },
  "sizes.sm": {
    "value": "24rem",
    "variable": "var(--sizes-sm)"
  },
  "sizes.md": {
    "value": "28rem",
    "variable": "var(--sizes-md)"
  },
  "sizes.lg": {
    "value": "32rem",
    "variable": "var(--sizes-lg)"
  },
  "sizes.xl": {
    "value": "36rem",
    "variable": "var(--sizes-xl)"
  },
  "sizes.2xl": {
    "value": "42rem",
    "variable": "var(--sizes-2xl)"
  },
  "sizes.3xl": {
    "value": "48rem",
    "variable": "var(--sizes-3xl)"
  },
  "sizes.4xl": {
    "value": "56rem",
    "variable": "var(--sizes-4xl)"
  },
  "sizes.5xl": {
    "value": "64rem",
    "variable": "var(--sizes-5xl)"
  },
  "sizes.6xl": {
    "value": "72rem",
    "variable": "var(--sizes-6xl)"
  },
  "sizes.7xl": {
    "value": "80rem",
    "variable": "var(--sizes-7xl)"
  },
  "sizes.8xl": {
    "value": "90rem",
    "variable": "var(--sizes-8xl)"
  },
  "sizes.prose": {
    "value": "65ch",
    "variable": "var(--sizes-prose)"
  },
  "sizes.breakpoint-xs": {
    "value": "480px",
    "variable": "var(--sizes-breakpoint-xs)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "spacing.0": {
    "value": "0",
    "variable": "var(--spacing-0)"
  },
  "spacing.1": {
    "value": "0.0625rem",
    "variable": "var(--spacing-1)"
  },
  "spacing.2": {
    "value": "0.125rem",
    "variable": "var(--spacing-2)"
  },
  "spacing.3": {
    "value": "0.1875rem",
    "variable": "var(--spacing-3)"
  },
  "spacing.4": {
    "value": "0.25rem",
    "variable": "var(--spacing-4)"
  },
  "spacing.5": {
    "value": "0.3125rem",
    "variable": "var(--spacing-5)"
  },
  "spacing.6": {
    "value": "0.375rem",
    "variable": "var(--spacing-6)"
  },
  "spacing.7": {
    "value": "0.4375rem",
    "variable": "var(--spacing-7)"
  },
  "spacing.8": {
    "value": "0.5rem",
    "variable": "var(--spacing-8)"
  },
  "spacing.9": {
    "value": "0.5625rem",
    "variable": "var(--spacing-9)"
  },
  "spacing.10": {
    "value": "0.625rem",
    "variable": "var(--spacing-10)"
  },
  "spacing.12": {
    "value": "0.75rem",
    "variable": "var(--spacing-12)"
  },
  "spacing.14": {
    "value": "0.875rem",
    "variable": "var(--spacing-14)"
  },
  "spacing.16": {
    "value": "1rem",
    "variable": "var(--spacing-16)"
  },
  "spacing.20": {
    "value": "1.25rem",
    "variable": "var(--spacing-20)"
  },
  "spacing.24": {
    "value": "1.5rem",
    "variable": "var(--spacing-24)"
  },
  "spacing.32": {
    "value": "2rem",
    "variable": "var(--spacing-32)"
  },
  "spacing.40": {
    "value": "2.5rem",
    "variable": "var(--spacing-40)"
  },
  "spacing.48": {
    "value": "3rem",
    "variable": "var(--spacing-48)"
  },
  "spacing.56": {
    "value": "3.5rem",
    "variable": "var(--spacing-56)"
  },
  "spacing.64": {
    "value": "4rem",
    "variable": "var(--spacing-64)"
  },
  "spacing.72": {
    "value": "4.5rem",
    "variable": "var(--spacing-72)"
  },
  "spacing.80": {
    "value": "5rem",
    "variable": "var(--spacing-80)"
  },
  "spacing.96": {
    "value": "6rem",
    "variable": "var(--spacing-96)"
  },
  "spacing.full": {
    "value": "100%",
    "variable": "var(--spacing-full)"
  },
  "spacing.min": {
    "value": "min-content",
    "variable": "var(--spacing-min)"
  },
  "spacing.max": {
    "value": "max-content",
    "variable": "var(--spacing-max)"
  },
  "spacing.fit": {
    "value": "fit-content",
    "variable": "var(--spacing-fit)"
  },
  "spacing.xs": {
    "value": "20rem",
    "variable": "var(--spacing-xs)"
  },
  "spacing.sm": {
    "value": "24rem",
    "variable": "var(--spacing-sm)"
  },
  "spacing.md": {
    "value": "28rem",
    "variable": "var(--spacing-md)"
  },
  "spacing.lg": {
    "value": "32rem",
    "variable": "var(--spacing-lg)"
  },
  "spacing.xl": {
    "value": "36rem",
    "variable": "var(--spacing-xl)"
  },
  "spacing.2xl": {
    "value": "42rem",
    "variable": "var(--spacing-2xl)"
  },
  "spacing.3xl": {
    "value": "48rem",
    "variable": "var(--spacing-3xl)"
  },
  "spacing.4xl": {
    "value": "56rem",
    "variable": "var(--spacing-4xl)"
  },
  "spacing.5xl": {
    "value": "64rem",
    "variable": "var(--spacing-5xl)"
  },
  "spacing.6xl": {
    "value": "72rem",
    "variable": "var(--spacing-6xl)"
  },
  "spacing.7xl": {
    "value": "80rem",
    "variable": "var(--spacing-7xl)"
  },
  "spacing.8xl": {
    "value": "90rem",
    "variable": "var(--spacing-8xl)"
  },
  "spacing.prose": {
    "value": "65ch",
    "variable": "var(--spacing-prose)"
  },
  "radii.0": {
    "value": "0",
    "variable": "var(--radii-0)"
  },
  "radii.1": {
    "value": "0.0625rem",
    "variable": "var(--radii-1)"
  },
  "radii.2": {
    "value": "0.125rem",
    "variable": "var(--radii-2)"
  },
  "radii.4": {
    "value": "0.25rem",
    "variable": "var(--radii-4)"
  },
  "radii.8": {
    "value": "0.5rem",
    "variable": "var(--radii-8)"
  },
  "radii.16": {
    "value": "1rem",
    "variable": "var(--radii-16)"
  },
  "radii.100": {
    "value": "100%",
    "variable": "var(--radii-100)"
  },
  "breakpoints.xs": {
    "value": "480px",
    "variable": "var(--breakpoints-xs)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "colors.utility.shadowColor": {
    "value": "var(--colors-utility-shadow-color)",
    "variable": "var(--colors-utility-shadow-color)"
  },
  "spacing.-0": {
    "value": "calc(var(--spacing-0) * -1)",
    "variable": "var(--spacing-0)"
  },
  "spacing.-1": {
    "value": "calc(var(--spacing-1) * -1)",
    "variable": "var(--spacing-1)"
  },
  "spacing.-2": {
    "value": "calc(var(--spacing-2) * -1)",
    "variable": "var(--spacing-2)"
  },
  "spacing.-3": {
    "value": "calc(var(--spacing-3) * -1)",
    "variable": "var(--spacing-3)"
  },
  "spacing.-4": {
    "value": "calc(var(--spacing-4) * -1)",
    "variable": "var(--spacing-4)"
  },
  "spacing.-5": {
    "value": "calc(var(--spacing-5) * -1)",
    "variable": "var(--spacing-5)"
  },
  "spacing.-6": {
    "value": "calc(var(--spacing-6) * -1)",
    "variable": "var(--spacing-6)"
  },
  "spacing.-7": {
    "value": "calc(var(--spacing-7) * -1)",
    "variable": "var(--spacing-7)"
  },
  "spacing.-8": {
    "value": "calc(var(--spacing-8) * -1)",
    "variable": "var(--spacing-8)"
  },
  "spacing.-9": {
    "value": "calc(var(--spacing-9) * -1)",
    "variable": "var(--spacing-9)"
  },
  "spacing.-10": {
    "value": "calc(var(--spacing-10) * -1)",
    "variable": "var(--spacing-10)"
  },
  "spacing.-12": {
    "value": "calc(var(--spacing-12) * -1)",
    "variable": "var(--spacing-12)"
  },
  "spacing.-14": {
    "value": "calc(var(--spacing-14) * -1)",
    "variable": "var(--spacing-14)"
  },
  "spacing.-16": {
    "value": "calc(var(--spacing-16) * -1)",
    "variable": "var(--spacing-16)"
  },
  "spacing.-20": {
    "value": "calc(var(--spacing-20) * -1)",
    "variable": "var(--spacing-20)"
  },
  "spacing.-24": {
    "value": "calc(var(--spacing-24) * -1)",
    "variable": "var(--spacing-24)"
  },
  "spacing.-32": {
    "value": "calc(var(--spacing-32) * -1)",
    "variable": "var(--spacing-32)"
  },
  "spacing.-40": {
    "value": "calc(var(--spacing-40) * -1)",
    "variable": "var(--spacing-40)"
  },
  "spacing.-48": {
    "value": "calc(var(--spacing-48) * -1)",
    "variable": "var(--spacing-48)"
  },
  "spacing.-56": {
    "value": "calc(var(--spacing-56) * -1)",
    "variable": "var(--spacing-56)"
  },
  "spacing.-64": {
    "value": "calc(var(--spacing-64) * -1)",
    "variable": "var(--spacing-64)"
  },
  "spacing.-72": {
    "value": "calc(var(--spacing-72) * -1)",
    "variable": "var(--spacing-72)"
  },
  "spacing.-80": {
    "value": "calc(var(--spacing-80) * -1)",
    "variable": "var(--spacing-80)"
  },
  "spacing.-96": {
    "value": "calc(var(--spacing-96) * -1)",
    "variable": "var(--spacing-96)"
  },
  "spacing.-full": {
    "value": "calc(var(--spacing-full) * -1)",
    "variable": "var(--spacing-full)"
  },
  "spacing.-min": {
    "value": "calc(var(--spacing-min) * -1)",
    "variable": "var(--spacing-min)"
  },
  "spacing.-max": {
    "value": "calc(var(--spacing-max) * -1)",
    "variable": "var(--spacing-max)"
  },
  "spacing.-fit": {
    "value": "calc(var(--spacing-fit) * -1)",
    "variable": "var(--spacing-fit)"
  },
  "spacing.-xs": {
    "value": "calc(var(--spacing-xs) * -1)",
    "variable": "var(--spacing-xs)"
  },
  "spacing.-sm": {
    "value": "calc(var(--spacing-sm) * -1)",
    "variable": "var(--spacing-sm)"
  },
  "spacing.-md": {
    "value": "calc(var(--spacing-md) * -1)",
    "variable": "var(--spacing-md)"
  },
  "spacing.-lg": {
    "value": "calc(var(--spacing-lg) * -1)",
    "variable": "var(--spacing-lg)"
  },
  "spacing.-xl": {
    "value": "calc(var(--spacing-xl) * -1)",
    "variable": "var(--spacing-xl)"
  },
  "spacing.-2xl": {
    "value": "calc(var(--spacing-2xl) * -1)",
    "variable": "var(--spacing-2xl)"
  },
  "spacing.-3xl": {
    "value": "calc(var(--spacing-3xl) * -1)",
    "variable": "var(--spacing-3xl)"
  },
  "spacing.-4xl": {
    "value": "calc(var(--spacing-4xl) * -1)",
    "variable": "var(--spacing-4xl)"
  },
  "spacing.-5xl": {
    "value": "calc(var(--spacing-5xl) * -1)",
    "variable": "var(--spacing-5xl)"
  },
  "spacing.-6xl": {
    "value": "calc(var(--spacing-6xl) * -1)",
    "variable": "var(--spacing-6xl)"
  },
  "spacing.-7xl": {
    "value": "calc(var(--spacing-7xl) * -1)",
    "variable": "var(--spacing-7xl)"
  },
  "spacing.-8xl": {
    "value": "calc(var(--spacing-8xl) * -1)",
    "variable": "var(--spacing-8xl)"
  },
  "spacing.-prose": {
    "value": "calc(var(--spacing-prose) * -1)",
    "variable": "var(--spacing-prose)"
  },
  "colors.colorPalette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  },
  "colors.colorPalette.0": {
    "value": "var(--colors-color-palette-0)",
    "variable": "var(--colors-color-palette-0)"
  },
  "colors.colorPalette.1": {
    "value": "var(--colors-color-palette-1)",
    "variable": "var(--colors-color-palette-1)"
  },
  "colors.colorPalette.2": {
    "value": "var(--colors-color-palette-2)",
    "variable": "var(--colors-color-palette-2)"
  },
  "colors.colorPalette.3": {
    "value": "var(--colors-color-palette-3)",
    "variable": "var(--colors-color-palette-3)"
  },
  "colors.colorPalette.4": {
    "value": "var(--colors-color-palette-4)",
    "variable": "var(--colors-color-palette-4)"
  },
  "colors.colorPalette.5": {
    "value": "var(--colors-color-palette-5)",
    "variable": "var(--colors-color-palette-5)"
  },
  "colors.colorPalette.10": {
    "value": "var(--colors-color-palette-10)",
    "variable": "var(--colors-color-palette-10)"
  },
  "colors.colorPalette.20": {
    "value": "var(--colors-color-palette-20)",
    "variable": "var(--colors-color-palette-20)"
  },
  "colors.colorPalette.30": {
    "value": "var(--colors-color-palette-30)",
    "variable": "var(--colors-color-palette-30)"
  },
  "colors.colorPalette.40": {
    "value": "var(--colors-color-palette-40)",
    "variable": "var(--colors-color-palette-40)"
  },
  "colors.colorPalette.50": {
    "value": "var(--colors-color-palette-50)",
    "variable": "var(--colors-color-palette-50)"
  },
  "colors.colorPalette.60": {
    "value": "var(--colors-color-palette-60)",
    "variable": "var(--colors-color-palette-60)"
  },
  "colors.colorPalette.70": {
    "value": "var(--colors-color-palette-70)",
    "variable": "var(--colors-color-palette-70)"
  },
  "colors.colorPalette.80": {
    "value": "var(--colors-color-palette-80)",
    "variable": "var(--colors-color-palette-80)"
  },
  "colors.colorPalette.90": {
    "value": "var(--colors-color-palette-90)",
    "variable": "var(--colors-color-palette-90)"
  },
  "colors.colorPalette.100": {
    "value": "var(--colors-color-palette-100)",
    "variable": "var(--colors-color-palette-100)"
  },
  "colors.colorPalette.shadowColor": {
    "value": "var(--colors-color-palette-shadow-color)",
    "variable": "var(--colors-color-palette-shadow-color)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar