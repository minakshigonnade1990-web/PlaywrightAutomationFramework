import{test,expect} from '@playwright/test';
test('File Uploads',async({page})=>{
await page.goto('https://letcode.in/file');
await page.setInputFiles('input[type="file"]' ,'D:/minu/software testing/Playwright notes/locator.docx');
await expect(page.getByText('locator.docx')).toBeVisible();
await page.waitForTimeout(5000);
});
test('File Downloads', async ({page}) => {

await page.goto('https://letcode.in/file');

const [download] = await Promise.all([
page.waitForEvent('download'),
await page.getByRole('link', {name: 'Download Excel'}).click()

]);

await download.saveAs('.downloads/excel-download.xlsx');

await page.waitForTimeout(5000); // Wait for 2 seconds to observe the downloaded file
});

test('file upload without input tag',async({page})=>{
    await page.goto('https://trace.playwright.dev/');
    const[filechooser]=await Promise.all([
    page.waitForEvent('filechooser'),
    await page.getByRole('button',{name:'Select file'}).click()
    ]);
    await filechooser.setFiles('D:/minu/software testing/Playwright notes/locator.docx');
});