import{test,expect} from '@playwright/test';
test('Handling Frames',async({page})=>{
await page.goto('https://lettestcode.in/');
await page.getByRole('link',{name:' Inner HTML '}).click();
const frame= page.frameLocator('#firstFr');

await frame.getByPlaceholder('Enter name').fill('minakshi');
console.log(frame.getByPlaceholder('Enter name').inputValue());//capture input value
await expect(frame.getByPlaceholder('Enter name')).toHaveValue('minakshi');//validate input value

//nested iframe
const frame2=frame.frameLocator('[src="innerframe"]');
 await frame2.locator('[name= "email"]').fill('abc@gmail.com');
console.log(await frame2.locator('[name= "email"]').inputValue());
 await expect(frame2.locator('[name= "email"]')).toHaveValue('abc@gmail.com');
await page.waitForTimeout(5000);

});