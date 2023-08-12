# End-to-End (e2e) Testing with Playwright

This is a basic e2e testing project powered by JavaScript and Playwright. This documentation serves as a guide to help you understand the test structure, especially our specific Google Search test.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup & Installation](#setup--installation)
- [Running Tests](#running-tests)
- [Google Search Test Explanation](#google-search-test-explanation)
- [Continuous Integration (GitHub Actions)](#continuous-integration-github-actions)
- [Future Improvements](#future-improvements)

## Prerequisites

Before proceeding with the setup and test execution, ensure you have the following:

- **npm**: This project requires npm to be installed locally. If you don't have it installed, you can [download and install npm from here](https://www.npmjs.com/get-npm).

## Setup & Installation

Before you can run tests, ensure you've set up your environment correctly:

### Installing Dependencies:

```
npm install
```

### Installing Browsers for Playwright:

```
npx playwright install
```

## Running Tests

After setting up your environment, you can run tests with the following command:

```
npm run test
```

or

```
npx playwright test
```

## Google Search Test Explanation

The Google Search test has been crafted with specific requirements:

**Objective:** Google search for Selenium, open the second Google Result in a new tab and check the Page Title.

**Details to Note:**

- **Selector Uniqueness**: The test uses `page.locator("h3").nth(5)` as the selector to open the second Google result. At first glance, this might seem counter-intuitive. However, upon close inspection, one realizes that the first four selectors correspond to the first Google result. This nuance is pivotal to ensuring our test behaves as expected.
- **Opening Links in a New Tab**: The test requirement stipulates that the second Google Result should open in a new tab. To ensure this, we utilize a click modifier. Depending on the operating system:
  - MacOS: Uses the `Meta` key as the modifier.
  - Other OS: Uses the `Control` key as the modifier.

## Continuous Integration (GitHub Actions)

To maintain the quality and reliability of our tests, this project has been integrated with GitHub Actions. Every time a Pull Request (PR) is opened or merged with the main branch, the test suite runs to ensure integrity.

## Future Improvements

The current solution for the Google Search test, though stable, isn't the most robust. Ideally, we'd want specific attributes or `data-testid` attached to the Google Results for more reliability. However, given that we don't have control over Google's markup, the current approach was deemed most stable.

---

This project was developed by `ecportella`.
