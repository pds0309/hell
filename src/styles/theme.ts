import { DefaultTheme } from "styled-components";

const SCALE =
  window.innerWidth / window.innerHeight < 1.83
    ? Number((window.innerWidth / 1960).toFixed(2))
    : Number((window.innerHeight * 1.83) / 1960).toFixed(2);

export const colors = {
  /**
   * white0: #FFFFFF / 순백의 화이뜨
   */
  white0: "#FFFFFF",
  /**
   * white1: #F0F0F0 / Smoke White
   */
  white1: "#F0F0F0",
  /**
   * 무슨 #f4f4f4
   */
  white2: "#f4f4f4",
  black1: "#2c2c2c",
  black2: "#161616",
  /**
   * grey1: #696969 / Dim-grey
   */
  grey1: "#696969",
  grey2: "#757575",
  grey3: "#444444",
  grey4: "#AAAAAA",
  silver: "#c4c4c4",
};

export const boxShadows = {
  card: "16px 12px 0px #000000",
};

export const layout = {
  maxWidth: "1920px",
  maxHeight: "1080px",
  scale: SCALE < 0.5 ? 0.5 : SCALE,
};

export const borders = {
  large: "8px solid #F0F0F0",
  normal: "4px solid #F0F0F0",
  smallGrey: "2px solid #444444",
};

export type ColorTypes = typeof colors;
export type BoxShadowTypes = typeof boxShadows;
export type LayoutTypes = typeof layout;
export type BorderTypes = typeof borders;

export const theme: DefaultTheme = {
  colors,
  boxShadows,
  layout,
  borders,
};
