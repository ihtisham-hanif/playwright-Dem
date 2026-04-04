 import { test, expect } from '@playwright/test';
 test('Mousehov', async ({ page }) => {
await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html')
 const button= await page.locator("//span[@class='context-menu-one btn btn-neutral']")


await button.click({button:'right'});
await page.waitForTimeout(5000);

   });