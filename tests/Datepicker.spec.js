import{test,expect} from '@playwright/test';
test('Assertionstest', async ({ page }) => {
// open APP URL
   await page.goto('https://testautomationpractice.blogspot.com/')
   waitUntil: 'domcontentloaded'
   
   //await  page.locator('#datepicker').fill('06/30/2025')
   //await page.fill('#datepicker','13/15/2025')
   //await page.waitForTimeout(3000);

   //date
   const year="2025"
   const month="December"
   const date = "17"


   await  page.locator('#datepicker').click()
   //await page.waitForTimeout(9000);
   while(true)
   {
   const currentmonth= await page.locator('.ui-datepicker-month').textContent();
   const currentyear= await page.locator('.ui-datepicker-year').textContent();

   if (currentyear == year && currentmonth == month)
   {
    break;
   }
   await page.locator('[title="Prev"]').click()
    }
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
    await page.waitForTimeout(4000)
   });