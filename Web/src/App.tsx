import React from "react";
import { GlobalStyles, Theme } from "./assets/styles/Global";
import { Routes, Route } from "react-router-dom";

import { Global } from "@emotion/react";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { ThemeProvider } from "@mui/material";
import { Cadastro } from "./pages/Cadastro";
import { Dashboard } from "./pages/Dashboard";

export function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={Theme}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
