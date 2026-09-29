"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { ReactNode } from "react";

/** Playground MUI theme — brand primary, full semantic palette. */
export const playgroundMuiTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6EA8DD",
      dark: "#4F8BC2",
      light: "#9FC7EE",
      contrastText: "#211712",
    },
    secondary: {
      main: "#DFA878",
      dark: "#B8895F",
      light: "#ECC39E",
      contrastText: "#211712",
    },
    error: {
      main: "#F08A7C",
    },
    warning: {
      main: "#F2B36B",
    },
    info: {
      main: "#6EA8DD",
    },
    success: {
      main: "#7FC98C",
      light: "#1C2A1E",
      dark: "#B6E3BD",
      contrastText: "#120B08",
    },
    background: {
      default: "#120B08",
      paper: "#211712",
    },
    text: {
      primary: "#FAF3EA",
      secondary: "#EFE2D4",
      disabled: "#E8BF96",
    },
    divider: "rgba(250, 243, 234, 0.16)",
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
          borderColor: "rgba(250, 243, 234, 0.16)",
          backgroundColor: "rgba(33, 23, 18, 0.7)",
          "&:hover": {
            borderColor: "rgba(110, 168, 221, 0.4)",
            backgroundColor: "#211712",
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
          border: "1px solid rgba(250, 243, 234, 0.10)",
          backgroundImage: "none",
          boxShadow: "0 18px 48px rgba(0, 0, 0, 0.5)",
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
          color: "#EFE2D4",
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
