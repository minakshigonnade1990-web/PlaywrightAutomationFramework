import {test,expect} from '@playwright/test';
test('getByRole', async({page})=>{
    await page.goto('https://www.facebook.com/');
    await page.getByRole('textbox',{name: 'Email address'}).fill('minakshigonnade1990@gmai.com');
    await page.waitForTimeout(2000);
     await page.getByRole('textbox',{name: 'Password'}).fill('minakshi');
    await page.getByRole('button', {name:'Log in'}).click();
    await page.waitForTimeout(2000);
    await page
});

test('getByPlaceholder',async({ page})=>{
    await page.goto('https://letcode.in/edit');
    await page.getByRole('textbox',{name: 'Enter first & last name'}).fill('getByLabel works');
    await page.getByPlaceholder('Enter first & last name').fill('Minakshi Parate');
    await page.waitForTimeout(2000);
});
// test('getByLabel',async({ page})=>{
//     await page.goto('https://xqa.io/practice/text-box');
//     await page.getByLabel('userName').fill('Minakshi');
//      await page.waitForTimeout(2000);
});
test('getByText', async({page})=>{
    await page.goto('https://letcode.in/test');
    await page.getByRole('link',{name:'Click'}).click();
    await page.getByText('Goto Home').first().click();
});
// test('getByTestId', async({page})=>{
// await page.goto('https://www.saucedemo.com/');
// await page.getByTestId('user-name').fill('standard_user');
// await page.getByTestId('password').fill('secret_sauce');
// await page.getByTestId('login-button').click();
// });