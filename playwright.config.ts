import { defineConfig, devices } from "@playwright/test";

const PORT = 3026;

// Smoke tests run against the production build: `pnpm build` first, then `pnpm test:e2e`.
export default defineConfig({
  testDir: "e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    // Chromium at an iPhone's size, so the mobile menu and layout are covered.
    { name: "phone", use: { ...devices["iPhone 14"], browserName: "chromium" } },
  ],
  webServer: {
    command: "pnpm start",
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
