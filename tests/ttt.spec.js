import { test, expect } from '@playwright/test';

test('locators', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill("shamkhansham");
  await page.locator('#loginpassword').fill("shamkhansham@123");
  const logoutlink = await page.locator('#logout2');
  await expect(logoutlink).toBeVisible();
});

