const { test, expect } = require('@playwright/test');
const user = require("../user.js");


const email = user.email;
const password = user.password;

test('successful login form authorization', async ({ page }) => {

  await page.goto("https://netology.ru/?modal=sign_in", {setTimeout: 10000});

  page.pause();
  await page.fill('[placeholder="Email"]', email);
  await page.fill('[placeholder="Пароль"]', password);

  await page.click("button[data-testid='login-submit-btn']");

  const locator = page.locator('h2');
  await expect(locator).toContainText("Мои курсы и профессии",{timeout: 10000});

});
