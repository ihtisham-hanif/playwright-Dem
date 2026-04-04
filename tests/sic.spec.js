import{test,expect} from '@playwright/test';
test('Assertionstest', async ({ page }) => {
// open APP URL
   await page.goto('https://sic.ajk.gov.pk/pmylp/')

   //await page.locator("//button[@class='btn-close']").click
   //await page.waitForTimeout(5000);
   //await expect(page).toHaveTitle('')
    await expect(page).toHaveURL('https://sic.ajk.gov.pk/pmylp/')
   
   const title= await page.title()
   console.log(title)
   
   await page.locator('.navbar a.btn-success').click()
   //await page.waitForTimeout(6000);
   
   // await page.getByRole('button', { name: 'Close' }).click();
   //page.getByRole('button', { name:' next' }).click()

   await page.locator("//button[@class='btn-close']").click

   await page.locator('#cnic').fill('82301-8636801-2')
   await page.waitForTimeout(3000);
    await page.locator('#cnic_issue_date').fill('2025-12-26')
   //await page.getByRole('textbox', { name: 'CNIC Issue Date' }).fill('2025-12-26');
   await page.locator('#tier').selectOption({value:'1'})
 await page.waitForTimeout(6000);

 await page.getByRole('button', { name: ' Next' }).click();

 await page.locator('#name').fill('ali')
 await page .locator('#fatherName').fill('ahmed')
 await page .locator('#phone').fill('0333-12333')
   await page .locator('#amount').fill('400000')
   await page.locator('#district_id').selectOption({value:'5'})
   await page.locator('#tehsil_id').selectOption({value:'7'})
   
   await page .locator('#businessName').fill('Tech Provider')
   await page.locator('#businessType').selectOption({value:'New'})
   await page.locator('#business_category_id').selectOption({value:'26'})
   await page.locator('#business_sub_category_id').selectOption({value:'27'})
   await page .locator('#quota').selectOption({value:'Men'})
     await page.getByRole('textbox', { name: 'Select Branches' }).click();
  await page.getByRole('option', { name: 'Main Branch, Muzaffarabad' }).click();
  // await page.getByRole('option', { name: 'Main Branch, Muzaffarabad' }).click();
   await page .locator('#BusinessAddress').fill('ABC PMA ')
   await page .locator('#PermanentAddress').fill('Tech Provider')
    await page.locator('select[name="educations[0][education_level]"]').selectOption('Bachelor 16 Years');
  await page.getByRole('textbox', { name: 'Degree Title' }).fill('222222');
  await page.getByRole('textbox', { name: 'Institute Name' }).press('Enter');
  //await page.locator('.form-check-label').check()
await page.waitForTimeout(9000)
  await page.locator('#cnic_front').setInputFiles('tests\Uplaodfolders\simple.jpeg')
  await page.waitForTimeout(5000)
   });