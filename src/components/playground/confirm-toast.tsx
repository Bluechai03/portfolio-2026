"use client";

import { useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { PlaygroundMuiProvider } from "@/components/playground/mui-theme";

const paletteRoles = [
  "primary",
  "secondary",
  "error",
  "warning",
  "info",
  "success",
] as const;

function ConfirmToastDemo() {
  const theme = useTheme();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  function handleConfirm() {
    setDialogOpen(false);
    setToastOpen(true);
  }

  return (
    <Box>
      <Stack spacing={2.5}>
        <Typography variant="body1" color="text.secondary">
          Confirm with a dialog, then acknowledge with a success toast — using MUI palette roles
          (`primary`, `secondary`, `success`, and friends).
        </Typography>

        <Stack direction="row" useFlexGap spacing={1} sx={{ flexWrap: "wrap" }}>
          {paletteRoles.map((role) => (
            <Box
              key={role}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.25,
                py: 0.75,
                borderRadius: 1,
                border: 1,
                borderColor: "divider",
                bgcolor: "background.paper",
              }}
            >
              <Box
                aria-hidden
                sx={{
                  width: 14,
                  height: 14,
                  borderRadius: 0.5,
                  bgcolor: `${role}.main`,
                }}
              />
              <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: "0.04em" }}>
                {role}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Box>
          <Button variant="outlined" color="secondary" onClick={() => setDialogOpen(true)}>
            Archive draft
          </Button>
        </Box>
      </Stack>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby="archive-dialog-title"
        aria-describedby="archive-dialog-description"
      >
        <DialogTitle id="archive-dialog-title">Archive this draft?</DialogTitle>
        <DialogContent>
          <DialogContentText id="archive-dialog-description">
            You can restore it later from Archives. This won&apos;t delete the file.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2.5 }}>
          <Button color="secondary" onClick={() => setDialogOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleConfirm} autoFocus>
            Archive
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={toastOpen}
        autoHideDuration={3200}
        onClose={(_, reason) => {
          if (reason === "clickaway") return;
          setToastOpen(false);
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setToastOpen(false)}
          severity="success"
          variant="filled"
          sx={{
            width: "100%",
            bgcolor: theme.palette.success.main,
            color: theme.palette.success.contrastText,
          }}
        >
          Draft archived
        </Alert>
      </Snackbar>
    </Box>
  );
}

export function ConfirmToast() {
  return (
    <PlaygroundMuiProvider>
      <ConfirmToastDemo />
    </PlaygroundMuiProvider>
  );
}
