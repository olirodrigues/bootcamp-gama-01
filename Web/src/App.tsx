import React from "react";
import { GlobalStyles, Theme } from "./assets/styles/Global";
import { Routes, Route } from "react-router-dom";

import { Global } from "@emotion/react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={Theme}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
