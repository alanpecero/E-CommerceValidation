const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { CheckoutOverviewPage } = require('../pages/CheckoutOverviewPage');

test('Add item to cart and complete checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const overviewPage = new CheckoutOverviewPage(page);

  await loginPage.goto("https://www.saucedemo.com/v1/");
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addItemToCart();
  await inventoryPage.goToCart();

  await cartPage.proceedToCheckout();
  await checkoutPage.fillInformation('Bob', 'Smith', '12345');

  const total = await overviewPage.getTotal();
  expect(total).toContain('Total');

  await overviewPage.completeOrder();
  const confirmation = await overviewPage.getConfirmationMessage();
  expect(confirmation).toBe('Thank you for your order!');
});