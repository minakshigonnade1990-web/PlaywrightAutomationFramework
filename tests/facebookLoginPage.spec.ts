import {test,expect} from '@playwright/test';
test('Facebbok Login Page',async({page})=>{
    await page.goto('https://www.facebook.com/');
    await page.getByLabel('Email address or mobile number').fill('Minakshi Parate');
    await page.getByLabel('Password').fill('ugfubcu');
    //await page.locator('span',({{has text: 'Log in'}).click();
    await page.getByRole('link', {name:'Create new account'}).click();
    await page.waitForTimeout(5000);
});       