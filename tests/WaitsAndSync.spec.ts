import{test,expect} from '@playwright/test';
test('Waits And Synchronization',async({page})=>{
    await page.goto('https://automationexercise.com/products');
    await page.waitForLoadState('load'); //resorces are loaded like images, files,css,add,//slow
    await page.waitForLoadState('domcontentloaded');// html is loaded //Fast
    await page.waitForLoadState('networkidle');// it is waiting untill all network call are done, all API call completed
    //network calls are done,API are done, no network call//medium
    await page.locator('h2.title.text-center').waitFor({state: 'visible',timeout:5000});
    //visible(), hidden()-----on UI
    //attached(),dittached()---- in DOM html element
    console.log(await page.locator('h2.title.text-center').textContent());
});