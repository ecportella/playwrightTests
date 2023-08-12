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

**Objective**: We're searching for "Selenium" on Google, aiming to open the second result in a new tab, and then checking out the page title.

Here's what you should know:

- **Opening in a New Tab**: We want the second Google result to show up in a new tab. So, depending on your operating system:

  - MacOS: We press the `Meta` key before clicking.
  - Other OS: We use the `Control` key.

  This ensures that the link opens in a new tab as desired.

## CI with GitHub Actions

To keep everything on track, we've integrated with GitHub Actions. So, every time you either open or merge a PR with the main branch, the tests run to ensure everything's still working as expected.

## Looking Ahead

The current solution for the Google Search test, though stable, isn't the most robust. Ideally, we'd want specific attributes or data-testid attached to the Google Results for more reliability when it comes to clicking the second result. However, given that we don't have control over Google's markup, the current approach was deemed most stable.

---

If there are any questions, reach out. Cheers, `ecportella`.
