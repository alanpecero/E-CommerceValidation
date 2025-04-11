// playwright.config.js
module.exports = {
    use: {
      baseURL: 'https://www.saucedemo.com/v1/',
      headless: true,
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
    },
    retries: 0,
    timeout: 30000,
    reporter: [['list'], ['html']],
  };