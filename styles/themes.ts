import { DefaultTheme } from "styled-components";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
      hover: string;
      active: string;
      tertiary: string;
      background: string;
    };
    canvas: {
      env: string;
      cd: string;
      CDRough: number;
      fog: string;
      fogFar: number;
      surface: string;
      mirror: number;
      rough: number;
      spotlight: string;
      rectIntensity: number;
      spotIntensity: number;
      ambIntensity: number;
    };
  }
}

export const light: DefaultTheme = {
  borderRadius: "5px",
  colors: {
    main: `#151515`,
    secondary: `hsl(209, 100%, 20%)`,
    hover: `hsla(209, 100%, 20%, 0.67)`,
    active: `#5e5e5ed6`,
    tertiary: `#C1C2C267`,
    background: `#ffffff`,
  },
  canvas: {
    env:"https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/belfast_sunset_puresky_1k.hdr",
    cd: `hsla(14, 31%, 84%, 1)`,
    CDRough: 0.3, 
    fog: `#ffffff`,
    fogFar: 45,
    surface: `hsla(209, 100%, 80%, 1)`,
    mirror: 0.15,
    rough: 0,
    spotlight: `#ffffff`,
    rectIntensity: 2,
    spotIntensity: 0.6,
    ambIntensity: 0.3,
  },
};

export const dark: DefaultTheme = {
  borderRadius: "5px",
  colors: {
    main: `#C1C2C2`,
    secondary: `hsl(209, 31%, 80%)`,
    hover: `hsla(209, 31%, 80%, 0.67)`,
    active: `#ebebeb97`,
    tertiary: `#C1C2C267`,
    background: `#000000`,
  },
  canvas: {
    env:"https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/moonless_golf_1k.hdr",
    cd: `hsla(0, 0%, 14%, 1)`,
    CDRough: 0.1389,
    fog: `#000000`,
    fogFar: 50,
    surface: `hsla(209, 31%, 40%, 1)`,
    mirror: 0.28,
    rough: 30,
    spotlight: `hsla(209, 31%, 70%, 1)`,
    rectIntensity: 0.5,
    spotIntensity: 0.5,
    ambIntensity: 0.8,
  },
};
