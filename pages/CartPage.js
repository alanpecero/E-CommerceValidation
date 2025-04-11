exports.CartPage = class CartPage {
    constructor(page) {
      this.page = page;
      this.checkoutButton = '#checkout';
    }
  
    async proceedToCheckout() {
      await this.page.click(this.checkoutButton);
    }
  };