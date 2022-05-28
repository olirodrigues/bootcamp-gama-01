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
      main: "#F27D28",
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
