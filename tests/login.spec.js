require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto("https://www.saucedemo.com/v1/");
  await loginPage.login(process.env.ECOMM_USERNAME, process.env.ECOMM_PASSWORD);

  const title = await inventoryPage.isAtInventoryPage();
  expect(title).toBe('Products');
});