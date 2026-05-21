import {test,expect} from '@playwright/test';
test ('Basics of Actions', async({page})=>{
await page.goto('https://xqa.io/practice');
await expect(page).toHaveURL('https://xqa.io/practice');
console.log(await page.title());
await expect(page).toHaveTitle(/Practice Exercises/i);

await page.getByRole('heading',{name:'Element'}).click();
await expect(page).toHaveURL('https://xqa.io/practice/text-box');
await page.waitForTimeout(2000);
await expect(page).toHaveTitle(/Text box/i);
await expect(page.getByLabel('Full Name')).toBeVisible();
console.log(await page.locator('#userName').inputValue());//learning
await page.locator('#userName').fill('playwright Test user');
await page.waitForTimeout(2000);

await expect(page.locator('#userName')).toHaveValue('playwright Test user');



});
