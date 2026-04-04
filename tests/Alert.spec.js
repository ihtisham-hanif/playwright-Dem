import{test,expect} from '@playwright/test';
test.skip('Dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

 // Dialog window handler ( enable alert handling )
    page.on('dialog',async dialog=>{

     expect(dialog.type()).toContain('alert')
     expect(dialog.message()).toContain('I am an alert box!')
     await dialog.accept();


    })
   await page.click('#alertBtn')
   await page.waitForTimeout(5000);

        });


        test('Diaog box with ok and cancel', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

 // Dialog window handler ( enable alert handling )
    page.on('dialog',async dialog=>{

     expect(dialog.type()).toContain('confirm')
     expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();
     //await dialog.dismiss();

    })
   await page.click('#confirmBtn')
   await expect(page.locator('#demo')).toHaveText('You pressed OK!')
   await page.waitForTimeout(5000);

        });