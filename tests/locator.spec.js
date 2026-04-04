import { test, expect } from '@playwright/test';

test('locators', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/index.html')
   await page.locator('id=login2').click()
   //await page.getAttribute('id=loginusername').fill ("shamkhansham")
  await page.locator ('id=loginusername').fill("shamkhansham")
  await page.locator ('id=loginpassword').fill("shamkhansham")
   await page.getByRole('button', { name: 'Log in' }).click();
  //await page.getByRole('link', { name: 'Log out' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
 //const logoutlink= await page.locator ('id=logout2')
 //await expect(logoutlink).toBeVisible();

  });




  