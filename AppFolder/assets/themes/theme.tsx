import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#42C6A5",     // Green
    primary2: "#FBB344",    // Orange
    primary3: "#33354E",    // Dark Blue
    secondary: "#FC2626",   // Red

    danger100: "#fff2f2",
    danger200: "#ffd6d9",
    danger300: "#ffa8b4",
    danger400: "#ff708d",
    danger900: "#700940",

    basic100: "white",
    basic200: "#f7f8fa",
    basic300: "#edf0f4",
    basic400: "#dde1eb",
    basic1100: "#131729",

    primary100: "#f2f6ff",
    primary200: "#d9e4ff",
    primary300: "#a6c1ff",
    primary400: "#598bff",
    primary500: "#3366ff",
    primary600: "#284de0",
    primary700: "#2541cc",
    primary800: "#192f9e",
    primary900: "#14236e",

    success100 : "#EDFFF3",	
    success200 : "#B3FFD6",	
    success300 : "#8CFAC7",	
    success400 : "#51F0B0",	
    success500 : "#00E096",	
    success600 : "#00B383",	
    success700 : "#008F72",	
    success800 : "#007566",	
    success900 : "#00524C",

    info100 : "#F2F8FF",
    info200 : "#C7E2FF",
    info300 : "#94CBFF",
    info400 : "#42AAFF",
    info500 : "#0095FF",
    info600 : "#006FD6",
    info700 : "#0057C2",
    info800 : "#0041A8",
    info900 : "#002885",

    warning100 : "#FFFDF2",
    warning200 : "#FFF1C2",
    warning300 : "#FFE59E",
    warning400 : "#FFC94D",
    warning500 : "#FFAA00",
    warning600 : "#DB8B00",
    warning700 : "#B86E00",
    warning800 : "#945400",
    warning900 : "#703C00",

    danger100 :	"#FFF2F2",
    danger200 :	"#FFD6D9",
    danger300 :	"#FFA8B4",
    danger400 :	"#FF708D",
    danger500 :	"#FF3D71",
    danger600 :	"#DB2C66",
    danger700 :	"#B81D5B",
    danger800 :	"#94124E",
    danger900 :	"#700940",
    
    gray10: "#E5E5E5",
    gray20: "#CCCCCC",
    gray30: "#A1A1A1",
    gray40: "#999999",
    gray50: "#7F7F7F",
    gray60: "#666666",
    gray70: "#4C4C4C",
    gray80: "#333333",
    gray85: "#242526",
    gray90: "#191919",

    additionalColor4: "#C3C3C3",
    additionalColor9: "#F3F3F3",
    additionalColor11: "#F0FFFB",
    additionalColor13: "#EBF3EF",

    white: '#FFFFFF',
    black: "#000000",

    transparent: 'transparent',
    transparentWhite1: "rgba(255, 255, 255, 0.1)",
    transparentBlack1: "rgba(0, 0, 0, 0.1)",
    transparentBlack7: "rgba(0, 0, 0, 0.7)"
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Roboto-Bold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

export const darkTheme = {
    name: "dark",
    backgroundColor1: COLORS.gray85,
    backgroundColor2: COLORS.gray90,
    backgroundColor3: COLORS.gray90,
    backgroundColor4: COLORS.primary,
    backgroundColor5: COLORS.gray85,
    backgroundColor6: COLORS.black,
    backgroundColor7: COLORS.gray90,
    backgroundColor8: COLORS.gray70,
    lineDivider: COLORS.gray70,
    borderColor1: COLORS.gray70,
    borderColor2: COLORS.gray70,
    textColor: COLORS.white,
    textColor2: COLORS.white,
    textColor3: COLORS.gray40,
    textColor4: COLORS.white,
    textColor5: COLORS.gray30,
    textColor6: COLORS.gray30,
    textColor7: COLORS.gray40,
    tintColor: COLORS.white,
    dotColor1: COLORS.white,
    dotColor2: COLORS.primary,
}

export const lightTheme = {
    name: "light",
    backgroundColor1: COLORS.white,
    backgroundColor2: COLORS.primary3,
    backgroundColor3: COLORS.additionalColor11,
    backgroundColor4: COLORS.white,
    backgroundColor5: COLORS.additionalColor13,
    backgroundColor6: COLORS.primary3,
    backgroundColor7: COLORS.white,
    backgroundColor8: COLORS.gray10,
    lineDivider: COLORS.gray20,
    borderColor1: COLORS.white,
    borderColor2: COLORS.black,
    textColor: COLORS.black,
    textColor2: COLORS.primary,
    textColor3: COLORS.gray80,
    textColor4: COLORS.white,
    textColor5: COLORS.black,
    textColor6: COLORS.gray,
    textColor7: COLORS.black,
    tintColor: COLORS.black,
    dotColor1: COLORS.gray20,
    dotColor2: COLORS.primary3,
}

export const selectedTheme = darkTheme

const appTheme = { COLORS, SIZES, FONTS, darkTheme, lightTheme };

export default appTheme;
