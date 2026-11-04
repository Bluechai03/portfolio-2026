import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// next/font only works inside the Next build; in tests it returns a plain class name.
vi.mock("next/font/google", () => ({
  Barlow_Condensed: () => ({ className: "font-barlow-condensed" }),
}));
