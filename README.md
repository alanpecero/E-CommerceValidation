# E-CommerceValidation
Core automation flows for an e-commerce web application using Playwright with JavaScript. 

# 🛒 E-CommerceValidation with Playwright & JavaScript

This project contains automated end-to-end tests for an e-commerce web application (`https://www.saucedemo.com/v1/`) built using [Playwright](https://playwright.dev/) and JavaScript. The test suite follows the **Page Object Model (POM)** structure for scalability and maintainability.

## 📌 Test Scenarios Covered

The following user flows are automated:

- ✅ **Successful login** using valid credentials.
- ❌ **Failed login** scenario with invalid credentials.
- 🛍️ **Adding items to the cart** and completing checkout.
- ➕🗑️ **Adding multiple items** to the cart and **removing items** before purchase.


## SETUP

Install Dependencies -> 
npm install

Install Playwright browsers ->
npx playwright install

Run all tests -> 
npx playwright test

Run a specific test file -> 
npx playwright test tests/login.spec.js

## NOTES

The scripts are designed to be run headlessly by default but can be configured for headed runs for debugging.
