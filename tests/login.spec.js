import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.locator('id=login2').click()
});
