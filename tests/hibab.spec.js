import{test,expect} from '@playwright/test';
test('Assertionstest', async ({ page }) => {

   await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
   
await page.locator('#userEmail').fill('aliaaaaa@gmail.com');
await page.locator('#userPassword').fill('Sham@867..');
await page.locator('#login').click();   // 👈 FIXED

await page.locator(".card-body b").first().waitFor(); // 👈 SMART WAIT

const textcon = await page.locator(".card-body b").allTextContents();
console.log(textcon);
  await expect (textcon ).toContain('ADIDAS ORIGI1NAL')



});