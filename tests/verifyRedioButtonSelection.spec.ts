import{test,expect} from '@playwright/test';
test('verifyRdioButton',async({page})=> {
    await page.goto('https://letcode.in/radio');
 await page.locator('.field').locator('#yes').check();
   
//await page.locator('.field')
//.filter({hasText: 'Select any one'}) 
//.getByRole('radio',{name:'#yes'}).check();
console.log(await page.locator('.field').locator('#yes').isChecked());
 await page.pause();
});
test.only('verify check button',async({page})=>{
await page.goto('https://letcode.in/radio');
await page.getByLabel(' Remember me ').check();
await expect( page.getByLabel(' Remember me ')).toBeChecked();
await page.getByLabel('Remember me ').uncheck();
await expect(page.getByLabel(' Remember me ')).not.toBeChecked();
//await page.getByRole('link',{name:'FAKE terms and conditions'}).check();
//await expect(page.getByRole('link',{name:'FAKE terms and conditions'})).toBeChecked();
await page.getByLabel(' I agree to the FAKE terms and conditions').check();
await expect(page.getByLabel(' I agree to the FAKE terms and conditions')).toBeChecked();
console.log(await page.locator('#maybe').isDisabled());
await page.pause();
/*

Method	Usage
.check()	Preferred for radio buttons
.click()	Works, but not recommended
.isChecked()	Returns true/false
.toBeChecked()	Assertion

*/
});
