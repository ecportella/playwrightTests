// SELECTORS
const HOMEPAGE_URL = "https://www.google.com";
const SEARCH_INPUT = '[name="q"]';

// PAGE OBJECT ACTIONS
export const navigate = async (page) => {
  await page.goto(HOMEPAGE_URL);
};

export const searchFor = async (page, text) => {
  await page.fill(SEARCH_INPUT, text);
  await page.press(SEARCH_INPUT, "Enter");
  await page.waitForLoadState("domcontentloaded");
};
