import React from "react";

import { css } from "@emotion/react";
import { createTheme } from "@mui/material";

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

export const Theme = createTheme({
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
    subtitle1: {
      fontSize: 20,
    },
    subtitle2: {
      fontSize: 19,
      fontWeight: 400,
    },
    body1: {
      fontSize: 12,
    },
  },
});
