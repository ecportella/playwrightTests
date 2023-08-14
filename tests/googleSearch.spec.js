import { test, expect } from "@playwright/test";
import * as GoogleHomePage from "../page-objects/googleHomePage";
import * as GoogleResultsPage from "../page-objects/googleResultsPage";

test.describe("Google Search", () => {
  test.beforeEach(async ({ page }) => {
    await GoogleHomePage.navigate(page);
  });

  test("should search for Selenium, open the second result in a new tab, and check its title", async ({
    page,
  }) => {
    await GoogleHomePage.searchFor(page, "Selenium");
    const resultTab = await GoogleResultsPage.openResultByIndex(page, 1);

    expect(await resultTab.title()).toContain("Selenium");
  });
});
