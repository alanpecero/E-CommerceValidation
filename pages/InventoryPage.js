exports.InventoryPage = class InventoryPage {
    constructor(page) {
      this.page = page;
      this.addToCartButton = 'text=Add to cart';
      this.cartIcon = '.shopping_cart_link';
      this.pageTitle = '.title';
    }
  
    async addItemToCart() {
      await this.page.click(this.addToCartButton, { strict: false });
    }
  
    async goToCart() {
      await this.page.click(this.cartIcon);
    }
  
    async isAtInventoryPage() {
      await this.page.waitForURL(/.*inventory/);
      return this.page.locator(this.pageTitle).innerText();
    }

    async removeItemFromCart() {
        await this.page.click('text=Remove', { strict: false });
      }
      
  };