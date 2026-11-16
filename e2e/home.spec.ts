import { site } from "../src/content/site";
import { expect, test } from "./fixtures";

test.describe("home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("shows the name and the sections a visitor looks for", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toContainText(site.name.split(" ")[0]);
    for (const id of ["work", "experience", "about", "contact"]) {
      await expect(page.locator(`#${id}-heading`)).toBeVisible();
    }
  });

  test("lists both projects with their links", async ({ page }) => {
    for (const project of site.projects) {
      await expect(page.getByRole("heading", { name: project.title })).toBeVisible();
      for (const link of project.links) {
        await expect(page.getByRole("link", { name: link.label })).toHaveAttribute("href", link.href);
      }
    }
  });

  test("header links go to their sections", async ({ page, isMobile }) => {
    for (const item of site.nav) {
      if (isMobile) await page.getByRole("button", { name: "Open menu" }).click();
      await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: item.label }).click();
      await expect(page).toHaveURL(new RegExp(`${item.href}$`));
      await expect(page.locator(item.href)).toBeInViewport();
    }
  });

  test("opens and closes the mobile menu", async ({ page, isMobile }) => {
    test.skip(!isMobile, "The menu only exists at phone width.");
    const button = page.getByRole("button", { name: "Open menu" });
    await button.click();
    await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
    await expect(page.getByRole("navigation", { name: "Primary" })).toBeHidden();
  });

  test("has the contact and profile links, and a resume that downloads", async ({ page, request, isMobile }) => {
    if (isMobile) await page.getByRole("button", { name: "Open menu" }).click();
    for (const [label, href] of [
      ["LinkedIn", site.linkedin],
      ["GitHub", site.github],
      ["Resume", site.resume],
    ] as const) {
      await expect(page.getByRole("link", { name: label }).first()).toHaveAttribute("href", href);
    }
    await expect(page.locator(`a[href="mailto:${site.email}"]`).first()).toBeAttached();
    const resume = await request.get(site.resume);
    expect(resume.status()).toBe(200);
    expect(resume.headers()["content-type"]).toContain("pdf");
  });
});
