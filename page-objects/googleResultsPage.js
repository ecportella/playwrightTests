import { platform } from "os";

// SELECTORS
const SEARCH_RESULTS = "#search a > h3";

// PAGE OBJECT ACTIONS
export const openResultByIndex = async (page, index) => {
  const link = page.locator(SEARCH_RESULTS).nth(index);
  const [newPage] = await Promise.all([
    page.context().waitForEvent("page"),
    link.click({ modifiers: [platform() === "darwin" ? "Meta" : "Control"] }),
  ]);

  await newPage.bringToFront();
  await newPage.waitForTimeout(3000);

  return newPage;
};
