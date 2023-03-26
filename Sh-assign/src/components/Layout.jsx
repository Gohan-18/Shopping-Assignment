import React from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme} >
        <CssBaseline/>
        <Header />
        <main>
          <Outlet />
        </main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
