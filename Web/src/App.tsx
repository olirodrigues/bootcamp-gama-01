import React from "react";
import { GlobalStyles, Theme } from "./assets/styles/Global";

import { Global } from "@emotion/react";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
