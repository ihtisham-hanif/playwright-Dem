import{test,expect} from '@playwright/test';
test('Assertionstest', async ({ page }) => {

   await page.goto('https://bas.ajk.gov.pk/login');
   await page.waitForTimeout(150000); // 3 seconds
   
await page.locator('#login').fill('superadmin@gmail.com');
await page.locator('#password').fill('AcmRad@2026@AJK!');
await page.locator('//button[normalize-space()="Login"]').click()

})
