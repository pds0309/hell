import "styled-components";
import {
  BorderTypes,
  BoxShadowTypes,
  ColorTypes,
  LayoutTypes,
} from "./styles/theme";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorTypes;
    boxShadows: BoxShadowTypes;
    layout: LayoutTypes;
    borders: BorderTypes;
  }
}
