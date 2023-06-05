const { test, expect } = require('@playwright/test');

const email = "test@test.com";
const password = "asd";

test('failed login form authorization', async ({ page }) => {

    await page.goto("https://netology.ru/?modal=sign_in", {setTimeout: 10000});
  
    await page.fill('[placeholder="Email"]', email);
    await page.fill('[placeholder="Пароль"]', password);
  
    await page.click("button[data-testid='login-submit-btn']");
  
    const locator = page.locator("[data-testid='login-error-hint']");
    await expect(locator).toContainText("Вы ввели неправильно логин или пароль");
  
  });
  