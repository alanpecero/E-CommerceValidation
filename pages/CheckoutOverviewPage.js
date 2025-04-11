exports.CheckoutOverviewPage = class CheckoutOverviewPage {
    constructor(page) {
      this.page = page;
      this.finishButton = '#finish';
      this.totalLabel = '.summary_total_label';
      this.confirmationText = '.complete-header';
    }
  
    async completeOrder() {
      await this.page.click(this.finishButton);
    }
  
    async getTotal() {
      return this.page.locator(this.totalLabel).innerText();
    }
  
    async getConfirmationMessage() {
      return this.page.locator(this.confirmationText).innerText();
    }
  };