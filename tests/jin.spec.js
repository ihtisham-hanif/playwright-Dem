import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
      

  await expect(page).toHaveTitle('STORE')
  const pageTitle=await page.title();
  console.log('Page title is:', pageTitle);

  await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
  const pageURL=await page.url();
  console.log('page URL is:',pageURL)
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('shamkhansham');
  await page.locator('#loginpassword').fill('shamkhansham');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});

//wait expect(page).toHaveTitle('ajkpsc')
//const pageTitle= await page.title();
//console.log('page title is ;',pageTitle )

//await expect(page).toHaveURL('abc')
//const pageURL= await page.url();
//console.log ('page url is :', pageURL);