// @ts-check
const { test, expect } = require('@playwright/test');

test.skip('homepage has title and links to intro page', async ({ page }) => {
  await page.goto("https://olis-az-testprobate-court.azurewebsites.net/");

  


 

  await page.pause();
});

