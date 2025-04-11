require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Login fails with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.ECOMM_USERNAME, 'wrong_password');

  const errorMsg = await loginPage.getErrorMessage();
  expect(errorMsg).toContain('Username and password do not match');
});