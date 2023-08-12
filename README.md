# End-to-End Testing with Playwright

Hello! This is our e2e testing project using JavaScript and Playwright. Here, you'll find all the info you need to get started, especially the specifics on our Google Search test.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setting Things Up](#setup--installation)
- [Run the Tests](#running-tests)
- [About the Google Search Test](#google-search-test-explanation)
- [CI with GitHub Actions](#continuous-integration-with-github-actions)
- [Looking Ahead](#future-improvements)

## Prerequisites

First things first:

- **npm**: Make sure you've got npm installed on your machine. If you're not sure, or you need it, [here's where you can get it](https://www.npmjs.com/get-npm).

## Setting Things Up

Before running tests, let's get everything in order:

1. Install the necessary dependencies:

```bash
npm install
```

2. Set up the browsers for Playwright:

```bash
npx playwright install
```

## Run the Tests

All set? Great! Here's how to start:

```bash
npm run test
```

Or you can also use:

```bash
npx playwright test
```

## About the Google Search Test

Let's talk about that Google Search test:

**Objective**: We're searching for "Selenium" on Google, aiming to open the second result in a new tab, and then checking out the page title.

Here's what you should know:

- **Location Matters**: Google search results can differ based on where you are:

  - On GitHub Actions, we use `page.locator("h3").nth(1)`.
  - Running this locally from Brazil? Go for `page.locator("h3").nth(5)`, because the first four selectors relate to the initial result.

  This highlights why having a consistent method (like a `data-testid` or unique attributes) would be great. For the sake of consistency on GitHub Actions, we're sticking with `page.locator("h3").nth(1)` for now.

- **Opening in a New Tab**: We want the second Google result to show up in a new tab. So, depending on your operating system:
  - MacOS: We press the `Meta` key before clicking.
  - Other OS: We use the `Control` key.

## CI with GitHub Actions

To keep everything on track, we've integrated with GitHub Actions. So, every time you either open or merge a PR with the main branch, the tests run to ensure everything's still working as expected.

## Looking Ahead

Our current method for the Google Search test is doing its job, but we're always thinking about making things even better. Ideally, we'd love to have unique attributes or `data-testid` for Google results. But since we can't control Google's setup, we're doing our best with what we have.

---

Hope this helps! If there are any questions, reach out. Cheers, `ecportella`.
