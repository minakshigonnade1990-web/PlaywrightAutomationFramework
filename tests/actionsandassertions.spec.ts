import{test,expect} from '@playwright/test';
test('actionsAndAssertions', async({page})=>{
   await page.goto('https://xqa.io/practice');
   await expect(page).toHaveURL('https://xqa.io/practice');
   console.log(await page.title());
   await expect(page).toHaveTitle(/Automation Testing/i);
   await  page.getByRole('heading',{name: 'Element'}).click();
   await expect(page.getByLabel('Full Name')).toBeVisible();
   await page.locator('#userName').fill('Playwright Test User');
   await expect(page.locator('#userName')).toHaveValue('Playwright Test User');
   await page.waitForTimeout(2000);
   //test input methods

   await page.getByPlaceholder('name@example.com').fill('abac@gmail.com');
   await page.getByLabel('Current Address').pressSequentially('175,Manish Ngar',{delay:150});
   await page.getByLabel('Permanent Address').fill('permanent example address');

   await page.getByRole('button',{name: 'submit'}).click();
  
   // chaining locator
  // await expect(page.locator('#output').locator('#name')).toHaveText('Playwright Test User');
   await expect(page.locator('#output').locator('#name')).toContainText('Playwright Test User');
    await expect(page.locator('#output').locator('#currentAddress')
   .filter({hasText: ' 175,Manish Ngar'})).toBeVisible();
   await page.goto('https://xqa.io/practice/check-box');
  // await page.pause();
   //await page.pause();
   await page.goBack();
   await page.goForward();
   await page.reload();
});
