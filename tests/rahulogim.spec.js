import{test,expect} from '@playwright/test';
test('Assertionstest', async ({ page }) => {
// open APP URL
   await page.goto('https://rahulshettyacademy.com/client/#/auth/register')
   await page.locator('#firstName').fill('sham')
    await page.locator('#lastName').fill('khan')
     await page.locator('#userEmail').fill('sham@gmail.com')
      await page.locator('#userMobile').fill('3455297152')
      //await page.getByRole('combobox').selectOption ('2:student')
       await page.getByRole('combobox').selectOption('2: Student');
      await page.getByRole('radio', { name: 'Male', exact: true }).check();
       await page.locator('#userPassword').fill('Shamkhan123')
       await page.locator('#confirmPassword').fill('Shamkhan123')
         await page.getByRole('checkbox').check();
         await page.locator('#login').click()
         await page.locator('#userEmail')
         await page.locator('#userEmail').fill('')
         await page.locator('#userPassword').fill('')

      


});