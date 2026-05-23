import{test,expect} from  '@playwright/test';
test('Simple Alert',async({page})=>{
   await page.goto('https://letcode.in/alert'); 
page.on('dialog',async dialog=>{
    console.log(dialog.message());
    await dialog.accept();
});
await page.getByRole('button', {name:'Simple Alert'}).click();
await page.waitForTimeout(5000);
});

test('confirm Alert',async({page})=>{
page.on('dialog',async dialog=>{
    console.log(dialog.message);
    await dialog.dismiss();
   
});
await page.getByRole('button',{name:'Confirm Alert'}).click();
 await page.waitForTimeout(2000);
});


test('Prompt alert',async({page})=>{
    await page.goto('https://letcode.in/alert');
    page.on('dialog',async dialog => { 
        console.log(dialog.message);
        await dialog.accept('Playwright alert');
    });
    await page.getByRole('button',{name:'Prompt Alert'});
    await page.waitForTimeout(5000);
   // await expect(page.locator('#myName')).toContainText('Playwright alert');
});
test('Modern Alert',async({page})=>{
    await page.goto('https://letcode.in/alert');
    await page.getByRole('button',{name: 'Modern Alert'}).click();
    console.log(await page.locator('.modal-content').textContent());
    await page.locator('.modal-close').click();
await page.waitForTimeout(5000);
});