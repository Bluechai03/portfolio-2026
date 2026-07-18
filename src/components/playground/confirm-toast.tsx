"use client";

import { useRef, useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Fade from "@mui/material/Fade";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PlaygroundMuiProvider } from "@/components/playground/mui-theme";

const TOAST_DELAY_MS = 160;
const TOAST_MS = 3400;

function ConfirmToastDemo() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const toastTimer = useRef<number | null>(null);

  function clearToastTimer() {
    if (toastTimer.current !== null) {
      window.clearTimeout(toastTimer.current);
      toastTimer.current = null;
    }
  }

  function openDialog() {
    clearToastTimer();
    setToastOpen(false);
    setDialogOpen(true);
  }

  function closeDialog() {
    setDialogOpen(false);
  }

  function handleConfirm() {
    setDialogOpen(false);
    clearToastTimer();
    toastTimer.current = window.setTimeout(() => {
      setToastOpen(true);
      toastTimer.current = null;
    }, TOAST_DELAY_MS);
  }

  function closeToast(_: unknown, reason?: string) {
    if (reason === "clickaway") return;
    setToastOpen(false);
  }

  return (
    <Box>
      <Stack spacing={2.5}>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 36 * 8 }}>
          Confirm first, then a small toast after. Nothing fancy.
        </Typography>

        <Box>
          <Button variant="outlined" color="secondary" onClick={openDialog}>
            Archive draft
          </Button>
        </Box>
      </Stack>

      <Dialog
        open={dialogOpen}
        onClose={closeDialog}
        aria-labelledby="archive-dialog-title"
        aria-describedby="archive-dialog-description"
        slotProps={{
          transition: { timeout: 220 },
          backdrop: {
            sx: {
              backgroundColor: "rgba(18, 24, 31, 0.38)",
              backdropFilter: "blur(2px)",
            },
          },
        }}
      >
        <DialogTitle id="archive-dialog-title">Archive this draft?</DialogTitle>
        <DialogContent>
          <DialogContentText id="archive-dialog-description">
            You can restore it later from Archives. This won&apos;t delete the file.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleConfirm} autoFocus>
            Archive
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={toastOpen}
        autoHideDuration={TOAST_MS}
        onClose={closeToast}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 280 } }}
      >
        <Alert
          onClose={() => setToastOpen(false)}
          severity="success"
          variant="standard"
          sx={{
            minWidth: { xs: "min(100%, 20rem)", sm: "22rem" },
            bgcolor: "success.light",
            color: "success.dark",
            border: "1px solid",
            borderColor: "rgba(46, 125, 50, 0.22)",
            boxShadow: "0 10px 28px rgba(18, 24, 31, 0.10)",
            "& .MuiAlert-icon": {
              color: "success.main",
            },
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
