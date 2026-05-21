import{test,expect} from '@playwright/test';
test('window Handling',async({page, context})=>{

    await page.goto('https://letcode.in/test');
    console.log(await page.url());
    await page.getByRole('link',{name:'  Tabs '}).click();

    //for child window 
const [newPage]= await Promise.all([
    context.waitForEvent('page'),  //listen for new page event before clicking the link
        page.getByLabel('Goto Home').click()
]);
await newPage.waitForLoadState();
console.log(await page.url());
//await newPage.getByRole('link',{name: 'Contact'}).click();
await newPage.locator('[routerlink="/contact"]').click();
await expect(newPage.getByRole('heading',{name:'Koushik Chatterjee'})).toBeVisible;


const [newPage2]= await Promise.all([
    context.waitForEvent('page'),  //listen for new page event before clicking the link
        page.getByRole('button',{name :' Muiltiple windows'}).click()
]);

await newPage.close();

});