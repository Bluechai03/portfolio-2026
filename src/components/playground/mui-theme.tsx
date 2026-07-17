"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { ReactNode } from "react";

/** Playground MUI theme — brand primary, full semantic palette. */
export const playgroundMuiTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#005B96",
      dark: "#004578",
      light: "#337DB0",
      contrastText: "#F5F8FB",
    },
    secondary: {
      main: "#5C6B78",
      dark: "#3A4550",
      light: "#8A96A1",
      contrastText: "#F5F8FB",
    },
    error: {
      main: "#D32F2F",
    },
    warning: {
      main: "#ED6C02",
    },
    info: {
      main: "#0288D1",
    },
    success: {
      main: "#2E7D32",
    },
    background: {
      default: "#EEF3F8",
      paper: "#F5F8FB",
    },
    text: {
      primary: "#12181F",
      secondary: "#3A4550",
      disabled: "#5C6B78",
    },
    divider: "rgba(18, 24, 31, 0.12)",
  },
  typography: {
    fontFamily: "var(--font-figtree), ui-sans-serif, sans-serif",
    h6: {
      fontFamily: "var(--font-syne), ui-sans-serif, sans-serif",
      fontWeight: 600,
    },
    button: {
      fontFamily: "var(--font-syne), ui-sans-serif, sans-serif",
      fontWeight: 600,
      letterSpacing: "0.04em",
    },
  },
  shape: {
    borderRadius: 6,
  },
});

export function PlaygroundMuiProvider({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={playgroundMuiTheme}>{children}</ThemeProvider>;
}
