import { expect, test } from "./fixtures";

for (const path of ["/how-its-built", "/playground", "/work/interval-walking-timer"]) {
  test(`${path} loads`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
}

test("the old design system address leads to the build notes", async ({ page }) => {
  await page.goto("/system");
  await expect(page).toHaveURL(/\/how-its-built$/);
  await expect(page.getByRole("heading", { level: 1, name: "How this site is built" })).toBeVisible();
});

test("the build notes show what was turned down and link to their evidence", async ({ page }) => {
  await page.goto("/how-its-built");
  for (const name of ["What it runs on", "How it's checked", "Decisions, and what I turned down", "What I left out"]) {
    await expect(page.getByRole("heading", { level: 2, name })).toBeVisible();
  }
  await expect(page.getByText("What I turned down:").first()).toBeVisible();
  await expect(page.getByRole("link", { name: "The full decision log" })).toHaveAttribute("href", /decisions\.md$/);
});
