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
      light: "#E8F5E9",
      dark: "#1B5E20",
      contrastText: "#FFFFFF",
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
      letterSpacing: "-0.02em",
    },
    button: {
      fontFamily: "var(--font-syne), ui-sans-serif, sans-serif",
      fontWeight: 600,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
    },
    body1: {
      lineHeight: 1.55,
    },
    body2: {
      lineHeight: 1.55,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          paddingInline: 18,
          paddingBlock: 9,
          transition:
            "background-color 180ms cubic-bezier(0.22, 1, 0.36, 1), border-color 180ms cubic-bezier(0.22, 1, 0.36, 1), color 180ms cubic-bezier(0.22, 1, 0.36, 1), transform 120ms cubic-bezier(0.22, 1, 0.36, 1)",
          "&:active": {
            transform: "scale(0.98)",
          },
        },
        outlined: {
          borderColor: "rgba(18, 24, 31, 0.16)",
          backgroundColor: "rgba(245, 248, 251, 0.7)",
          "&:hover": {
            borderColor: "rgba(0, 91, 150, 0.35)",
            backgroundColor: "#F5F8FB",
          },
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        fullWidth: true,
        maxWidth: "xs",
      },
      styleOverrides: {
        paper: {
          borderRadius: 12,
          border: "1px solid rgba(18, 24, 31, 0.10)",
          backgroundImage: "none",
          boxShadow: "0 18px 48px rgba(18, 24, 31, 0.16)",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontFamily: "var(--font-syne), ui-sans-serif, sans-serif",
          fontWeight: 600,
          fontSize: "1.25rem",
          letterSpacing: "-0.02em",
          paddingTop: 24,
          paddingInline: 24,
          paddingBottom: 8,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          paddingInline: 24,
          paddingTop: "4px !important",
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          color: "#3A4550",
          fontSize: "0.975rem",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "20px 24px 22px",
          gap: 8,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          alignItems: "center",
          fontFamily: "var(--font-figtree), ui-sans-serif, sans-serif",
          fontWeight: 500,
        },
      },
    },
  },
});

export function PlaygroundMuiProvider({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={playgroundMuiTheme}>{children}</ThemeProvider>;
}
