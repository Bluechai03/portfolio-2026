"use client";

import { useEffect, useId, useRef, useState } from "react";

const TOAST_MS = 3200;

export function ConfirmToast() {
  const titleId = useId();
  const descriptionId = useId();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!dialogOpen) return;

    const previous = document.activeElement;
    cancelRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setDialogOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (previous instanceof HTMLElement) {
        previous.focus();
      } else {
        triggerRef.current?.focus();
      }
    };
  }, [dialogOpen]);

  useEffect(() => {
    if (!toastVisible) return;

    const timer = window.setTimeout(() => {
      setToastVisible(false);
    }, TOAST_MS);

    return () => window.clearTimeout(timer);
  }, [toastVisible, toastMessage]);

  function openDialog() {
    setDialogOpen(true);
  }

  function closeDialog() {
    setDialogOpen(false);
  }

  function confirmAction() {
    setDialogOpen(false);
    setToastMessage("Draft archived");
    setToastVisible(true);
  }

  return (
    <div className="relative min-h-[12rem]">
      <div className="flex flex-col items-start gap-4">
        <p className="max-w-md text-base leading-relaxed text-ink-soft">
          Confirm first, then acknowledge. The toast should feel like a quiet receipt — not another
          modal.
        </p>
        <button
          ref={triggerRef}
          type="button"
          onClick={openDialog}
          className="font-display rounded-md border border-line bg-bone px-5 py-3 text-sm font-semibold tracking-[0.06em] text-ink uppercase transition-[background-color,border-color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent/40 hover:bg-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.98]"
        >
          Archive draft
        </button>
      </div>

      {dialogOpen ? (
        <div className="confirm-overlay fixed inset-0 z-50 flex items-center justify-center px-6">
          <button
            type="button"
            aria-label="Dismiss dialog"
            className="absolute inset-0 bg-ink/35"
            onClick={closeDialog}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="confirm-dialog relative z-10 w-full max-w-md rounded-md border border-line bg-bone p-6 shadow-[0_18px_50px_color-mix(in_srgb,var(--ink)_18%,transparent)] md:p-7"
          >
            <h3
              id={titleId}
              className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl"
            >
              Archive this draft?
            </h3>
            <p id={descriptionId} className="mt-3 text-base leading-relaxed text-ink-soft">
              You can restore it later from Archives. This won&apos;t delete the file.
            </p>
            <div className="mt-7 flex flex-wrap justify-end gap-3">
              <button
                ref={cancelRef}
                type="button"
                onClick={closeDialog}
                className="font-display rounded-md border border-line bg-bg px-4 py-2.5 text-sm font-semibold tracking-[0.04em] text-ink-soft uppercase transition-colors hover:border-accent/30 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmAction}
                className="font-display rounded-md bg-accent px-4 py-2.5 text-sm font-semibold tracking-[0.04em] text-bone uppercase transition-colors hover:bg-accent-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bone active:scale-[0.98]"
              >
                Archive
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div
        className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-6"
        aria-live="polite"
        aria-atomic="true"
      >
        {toastVisible ? (
          <div
            role="status"
            className="confirm-toast pointer-events-auto flex items-center gap-3 rounded-md border border-line bg-ink px-4 py-3 text-sm text-bone shadow-[0_12px_40px_color-mix(in_srgb,var(--ink)_25%,transparent)]"
          >
            <span className="font-display font-medium tracking-[0.02em]">{toastMessage}</span>
            <button
              type="button"
              onClick={() => setToastVisible(false)}
              className="rounded-sm px-1.5 py-0.5 text-bone/70 transition-colors hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone/50"
            >
              Dismiss
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
