import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/900.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  textStyles: {
    inter: {
      fontFamily: "Inter",
      fontWeight: "400",
    },
    inter_medium: {
      fontFamily: "Inter",
      fontWeight: "500",
    },
    inter_bold: {
      fontFamily: "Inter",
      fontWeight: "700",
    },
    inter_bold_italic: {
      fontFamily: "Inter",
      fontWeight: "700",
      fontStyle: "italic",
    },
    inter_black: {
      fontFamily: "Inter",
      fontWeight: "900",
    },
    raleway_light: {
      fontFamily: "Raleway",
      fontWeight: "400",
    },
    raleway: {
      fontFamily: "Raleway",
      fontWeight: "500",
    },
    raleway_bold: {
      fontFamily: "Raleway",
      fontWeight: "700",
    },
    raleway_black: {
      fontFamily: "Raleway",
      fontWeight: "900",
    },
  },
});

export default theme;
