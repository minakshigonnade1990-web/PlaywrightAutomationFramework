import {test,expect} from '@playwright/test';
test('githubTest', async({page})=>{
   await page.goto('https://github.com');
});