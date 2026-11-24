import type { Locator, Page } from "@playwright/test";
import { expect, test } from "./fixtures";

// Presses and holds the pointer on an element, runs the check, then lets go away from it so
// no click fires.
async function whilePressed(page: Page, target: Locator, check: () => Promise<void>) {
  await target.scrollIntoViewIfNeeded();
  const box = await target.boundingBox();
  if (!box) throw new Error("Nothing to press: the element has no box.");
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  try {
    await check();
  } finally {
    await page.mouse.move(0, 0);
    await page.mouse.up();
  }
}

const scaleOf = (target: Locator) => target.evaluate((element) => getComputedStyle(element).scale);
const opacityOf = (target: Locator) => target.evaluate((element) => getComputedStyle(element).opacity);

test.describe("press feedback", () => {
  test("buttons and button-looking links sink while pressed", async ({ page }) => {
    await page.goto("/");
    const targets = [
      page.getByRole("link", { name: "See the work" }),
      page.getByRole("button", { name: "Switch phase" }),
    ];
    for (const target of targets) {
      await expect.poll(() => scaleOf(target)).toBe("none");
      await whilePressed(page, target, async () => {
        await expect.poll(() => scaleOf(target)).toBe("0.97");
      });
      await expect.poll(() => scaleOf(target)).toBe("none");
    }
  });

  test("nothing around a pressed button moves", async ({ page }) => {
    await page.goto("/");
    const pressed = page.getByRole("link", { name: "See the work" });
    const neighbour = page.getByRole("link", { name: "Get in touch" });
    // Wait for the hero's rise-in animation to finish and scroll, so the measurement
    // compares layout and not an element still sliding in.
    await expect
      .poll(() =>
        page.evaluate(
          () =>
            document
              .getAnimations()
              .filter((a) => (a as CSSAnimation).animationName === "rise" && a.playState !== "finished").length,
        ),
      )
      .toBe(0);
    await pressed.scrollIntoViewIfNeeded();
    const before = await neighbour.boundingBox();
    await whilePressed(page, pressed, async () => {
      await expect.poll(() => scaleOf(pressed)).toBe("0.97");
      expect(await neighbour.boundingBox()).toEqual(before);
    });
  });

  test("quiet text links fade instead of sinking", async ({ page }) => {
    await page.goto("/");
    const link = page.getByRole("link", { name: "Get in touch" }).locator(".link-underline");
    await expect.poll(() => opacityOf(link)).toBe("1");
    await whilePressed(page, link, async () => {
      await expect.poll(() => opacityOf(link)).toBe("0.7");
      expect(await scaleOf(link)).toBe("none");
    });
  });

  test("a disabled button does not sink", async ({ page }) => {
    await page.goto("/");
    // Add a disabled button to the real page, so the real stylesheet applies to it.
    await page.evaluate(() => {
      const button = document.createElement("button");
      button.disabled = true;
      button.textContent = "Off";
      button.style.cssText = "position:fixed;top:120px;left:20px;width:100px;height:40px;z-index:99";
      document.body.append(button);
    });
    const button = page.getByRole("button", { name: "Off" });
    await whilePressed(page, button, async () => {
      expect(await scaleOf(button)).toBe("none");
    });
  });

  test.describe("with reduced motion", () => {
    test.use({ reducedMotion: "reduce" });

    test("nothing sinks", async ({ page }) => {
      await page.goto("/");
      const targets = [
        page.getByRole("link", { name: "See the work" }),
        page.getByRole("button", { name: "Switch phase" }),
      ];
      for (const target of targets) {
        await whilePressed(page, target, async () => {
          await page.waitForTimeout(300);
          expect(await scaleOf(target)).toBe("none");
        });
      }
    });
  });
});
