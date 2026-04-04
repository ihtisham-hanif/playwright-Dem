import{test,expect} from '@playwright/test';
test('Dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
   //await  page .locator('#country').selectOption ('brazil')
  //await page.locator('#country').selectOption({value:'brazil'})
   //await page.locator('#country').selectOption({label:'brazil'})
   //await page.selectOption('#country','brazil')
   
   //1-Number of options  in the dropdown -- Approach 1
  // const option=await page.locator('#country Option')
   //await expect(option).toHaveCount(10)

   //2-Number of options  in the dropdown -- Approach 2
    //const options= await page.$$('#country Option')
    //console.log('totalnumber of options:',options.length )


    // check presence of somevalue-- Approch 1 direct method (return valye inthe form of string )
     //const content=await page.locator('#country').textContent()
     //await expect(content).toContain('Brazil')
      //await expect(content.includes('Brazil'));

      //lop statment 
      const options=await page.$$('#country Option')
      // console.log(options)
      let status=false; 

      for(const option of options)
      {
        let value= await option.textContent(); 
        console.log(value)
        if (value.includes('France')){

          console.log('value')
          status=true
          break;
        }
      }
      console.log(status)
      
    });