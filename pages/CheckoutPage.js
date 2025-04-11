exports.CheckoutPage = class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.firstName = '#first-name';
      this.lastName = '#last-name';
      this.postalCode = '#postal-code';
      this.continueButton = '#continue';
    }
  
    async fillInformation(first, last, zip) {
      await this.page.fill(this.firstName, first);
      await this.page.fill(this.lastName, last);
      await this.page.fill(this.postalCode, zip);
      await this.page.click(this.continueButton);
    }
  };