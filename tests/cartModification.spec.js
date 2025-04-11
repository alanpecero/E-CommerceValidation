const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');

test('Add multiple items to cart, then remove one', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addItemToCart();
  await inventoryPage.addItemToCart();

  await inventoryPage.goToCart();

  const itemsInCart = await page.locator('.cart_item').count();
  expect(itemsInCart).toBeGreaterThanOrEqual(2);

  await inventoryPage.removeItemFromCart();

  const updatedCount = await page.locator('.cart_item').count();
  expect(updatedCount).toBeLessThan(itemsInCart);
});