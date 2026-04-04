import{test,expect} from '@playwright/test';
test('Assertionstest', async ({ page }) => {
// open APP URL
   await page.goto('https://www.demoblaze.com')
    await expect.soft (page).toHaveTitle('STORE1')
   await expect.soft (page).toHaveURL('https://www.demfblaze.comff/')

   await expect.soft(page.locator('.navbar-brand')).toBeVisible()




     });