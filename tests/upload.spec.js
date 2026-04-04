import { test, expect } from '@playwright/test';

test('single File', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com')
    await page.locator('#singleFileInput').setInputFiles('')
  
});