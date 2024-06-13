// theme.js
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/great-vibes";  // Import the Great Vibes font


const theme = extendTheme({
  colors: {
    brand: {
      beige: "#F5F5DC",
      black: "#000000",
      oliveGreen: " #93C572",
      brown: "#563a19"
    },
  },
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Roboto', sans-serif",
    greatVibes: "'Great Vibes', cursive"
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "heading",
      },
    },
  },
  styles: {
    global: {
      "html, body": {
        fontFamily: "body",
      },
    },
  },
});

export default theme;
