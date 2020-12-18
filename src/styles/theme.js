import { theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  fonts: {
    body: '"Avenir Next", system-ui, sans-serif',
    heading: '"Avenir Next", system-ui, sans-serif',
    mono: "Menlo, monospace",
  },
  fontWeight: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: "5px",
    md: "8px",
  },
  fontSize: {
    ...theme.fontSize,
  },
  colors: {
    ...theme.colors,
    purple: {
      ...theme.colors.purple,
      200: '#B4CBEB',
      300: '#9ab1df',
      500: "#315395",
      600: "#6E8BC6",
    },
    gray: {
      ...theme.colors.gray,
      300: "#f3f2f0",
      310: "#eae8e6",
      350: "#C6BDDB",
      400: "#958FA3",
      500: "#625C70",
      600: "#29292e",
      700: "#202024",
      800: "#121214",
    },
    alert: {
      404: '#fa375a',
    },
  },
};

export default customTheme;


// export default {
//   background: '#fff',
//   primary: '#6E8BC6',
//   primary1: '#9ab1df',
//   primary2: '#315395',
//   primary3: '#4a6aa9',
//   primary4: '#ccd9f3',
//   alert: '#fa375a',
//   background2: '#E5E5E5',
//   primaryLigth: '#B4CBEB',
//   primaryLigther: '#D8D8E6',
//   // primaryDark: '#7F1856',
//   secondary: '#E2823C',
//   tirthy: '#A58A8D',
//   white: '#FFF',
//   light: '#f0f0f0',
//   grayLigther: '#F2F1F3',
//   grayLigth: '#C6BDDB',
//   gray: '#958FA3',
//   grayMedium: '#625C70',
//   grayDark: '#312E38',
//   black: '#000',
//   backgroundColorNotification: 'rgba(107, 139, 200, 0.1)',
//   transparent: 'transparent',

//   bree: 'BreeSerif-Regular',

//   primaryBorder: 4,
//   secondBorder: 8,
// };