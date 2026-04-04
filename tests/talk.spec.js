import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.locator('id=login2').click()
  //await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('shamkhansham');

  await page.locator('#loginpassword').fill('shamkhansham');
    await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
  //await page.locator('id="logout2').click();
});