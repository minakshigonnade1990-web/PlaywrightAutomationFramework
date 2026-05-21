import{test, expect} from '@playwright/test';
test('select Dropdown', async({page})=>{
    await page.goto('https://letcode.in/test');
await page.getByRole('link',{name:' Drop-Down '}).click();
//await page.locator('#fruits').click();

//First approach to select dropdown  select single dropdown at a time
const dropdown= await page.locator('#fruits');

await dropdown.selectOption('Apple');//name
await expect(page.getByText('You have selected Apple')).toBeVisible();

await dropdown.selectOption({value :'1'}); //value
await expect(page.getByText('You have selected Mango')).toBeVisible();

await dropdown.selectOption({label:'Banana'});//visible label or dropdown name
await expect(page.getByText('You have selected Banana')).toBeVisible();

await dropdown.selectOption({index: 3});//index
await expect(page.getByText('You have selected Orange')).toBeVisible();

//Select your super hero's 
// multiselect  dropdown
const dropdownmultiplesuperheros= await page.locator('#superheros');
    await dropdownmultiplesuperheros.selectOption(['Aquaman','Batman','Black Panther']);
    await expect(page.getByText('You have selected Aquaman')).toBeVisible();
    await dropdownmultiplesuperheros.selectOption(['ca','cm','dd']);
    await expect(page.getByText('You have selected Captain America')).toBeVisible();

    //Select the last programming language and print all the options
    const dropdownprogramminglanguage= await page.locator('#lang');
    const option=await dropdownprogramminglanguage.locator('option').allTextContents();
    console.log(option);
    await dropdownprogramminglanguage.locator('option').count();

    const optioncount= await dropdownprogramminglanguage.locator('option').count();
console.log(await optioncount);
await dropdownprogramminglanguage.selectOption({index: optioncount-1});
await page.waitForTimeout(5000);
});

test('Auto suggest select',async({page})=>{
     await page.goto('https://www.wikipedia.org/');
await page.getByLabel('Search Wikipedia').fill('India');
await page.locator('.suggestions-dropdown').waitFor({state: 'visible'});//wait for searching and visible
});


   