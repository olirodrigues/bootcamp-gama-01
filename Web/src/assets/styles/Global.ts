import { css } from "@emotion/react";
import { createTheme } from "@mui/material";
import type {} from "@mui/lab/themeAugmentation";

export const GlobalStyles = css`
  * {
    font-family: "Inter", sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;

declare module "@mui/material/styles" {
  interface Palette {
    complementaryYellow: Palette["primary"];
    complementaryBlue: Palette["primary"];
    complementaryWhite: Palette["primary"];
    complementaryBlack: Palette["primary"];
    Complementar2: Palette["primary"];
    Complementar3: Palette["primary"];
    Complementar4: Palette["primary"];
    Complementar5: Palette["primary"];
    Complementar6: Palette["primary"];
    Complementar7: Palette["primary"];
    Complementar8: Palette["primary"];
  }
  interface PaletteOptions {
    complementaryYellow: PaletteOptions["primary"];
    complementaryBlue: PaletteOptions["primary"];
    complementaryWhite: PaletteOptions["primary"];
    complementaryBlack: PaletteOptions["primary"];
    Complementar2: PaletteOptions["primary"];
    Complementar3: PaletteOptions["primary"];
    Complementar4: PaletteOptions["primary"];
    Complementar5: PaletteOptions["primary"];
    Complementar6: PaletteOptions["primary"];
    Complementar7: PaletteOptions["primary"];
    Complementar8: PaletteOptions["primary"];
  }

  interface TypographyVariants {
    bold: React.CSSProperties;
    subtitle3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    bold?: React.CSSProperties;
    subtitle3?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bold: true;
    subtitle3: true;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    border: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      light: "#577D9A",
      main: "#253F58",
      dark: "#1B314B",
    },
    secondary: {
      light: "#577D9A",
      main: "#253F58",
      dark: "#1B314B",
    },
    complementaryYellow: {
      light: "#577D9A",
      main: "#253F58",
      dark: "#1B314B",
    },
    complementaryBlue: {
      light: "#577D9A",
      main: "#253F58",
      dark: "#1B314B",
    },
    complementaryWhite: {
      light: "#577D9A",
      main: "#ffffff",
      dark: "#1B314B",
    },
    complementaryBlack: {
      light: "#577D9A",
      main: "#253F58",
      dark: "#1B314B",
    },
    Complementar2: {
      main: "#6296b3",
    },
    Complementar3: {
      main: "#ffffff",
    },
    Complementar4: {
      main: "#575454",
    },
    Complementar5: {
      main: "#868080",
    },
    Complementar6: {
      main: "#e5e5e5",
    },
    Complementar7: {
      main: "#dad4c8",
    },
    Complementar8: {
      main: "#be1e1e",
    },
    warning: {
      main: "#1B314B",
    },
    success: {
      main: "#253F58",
    },
    text: {
      secondary: "#868080",
    },
  },
  typography: {
    fontFamily: ["Inter"].join(","),
    h1: {
      fontSize: 34,
    },
    h2: {
      fontSize: 32,
    },
    h3: {
      fontSize: 24,
      fontWeight: 600,
    },
    h4: {
      fontSize: 20,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 20,
    },
    subtitle2: {
      fontSize: 19,
      fontWeight: 400,
    },
    // TODO: define a better name for this
    subtitle3: {
      fontSize: 18,
      fontWeight: 700,
    },
    body1: {
      fontSize: 14,
    },
    bold: {
      fontWeight: 600,
    },
  },
});

export const Theme = createTheme(theme, {
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "border", color: "a" },
          style: {
            borderRadius: 50,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.getContrastText(theme.palette.primary.main),
          },
        },
      ],
    },
  },
});
