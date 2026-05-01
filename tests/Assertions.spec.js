import{test,expect} from '@playwright/test';
test('Assertionstest', async ({ page }) => {
// open APP URL
   await page.goto('https://demo.nopcommerce.com/register')
   await expect (page).toHaveURL('https://demo.nopcommerce.com/register')
   await expect(page).toHaveTitle('nopCommerce demo store. Register')
   const logoelement=await page .locator('.header-logo000')
   await expect(logoelement).toBeVisible()
   const searchbar=await page.locator('#small-searchterms')
   await expect(searchbar).toBeEnabled()
   const maleradiobutton=await page.locator('#gender-male')
   await maleradiobutton.click()
   await expect(maleradiobutton).toBeChecked

   const newsletter=await page.locator('#NewsLetterSubscriptions_0__TypeId')
   await expect('newsletter').toBeChecked

   //to have Text
   await expect(await page .locator('.page-title h1')).toHaveText('Regist33er')
    });

    import{test,expect} from "@playwright/test";
    test (testname, async({page}))=> {
    await page.goto('')
    await page.toHaveTitle
    });

    import{test,expect} from "playwright/test"
    test( testname ,async{(page)}) => {

    });

    )
    
