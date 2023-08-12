import { platform } from "os";
import { test, expect } from "@playwright/test";

const isMac = platform() === "darwin";

test.describe("Google Search", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.google.com");
  });

  test("should search for Selenium, open the second result in a new tab, and check its title", async ({
    page,
  }) => {
    await page.fill('[name="q"]', "Selenium");
    await page.press('[name="q"]', "Enter");
    await page.waitForLoadState("domcontentloaded");

    const link = page.locator("#search a > h3").nth(1);
    const [newPage] = await Promise.all([
      page.context().waitForEvent("page"),
      link.click({ modifiers: [isMac ? "Meta" : "Control"] }),
    ]);

    await newPage.bringToFront();
    await newPage.waitForEvent("load");

    const title = await newPage.title();
    expect(title).toContain("Selenium");
  });
});
