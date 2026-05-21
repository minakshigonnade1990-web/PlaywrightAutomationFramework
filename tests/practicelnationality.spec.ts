import{test,expect} from '@playwright/test';
test('nationality', async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByPlaceholder("Username").fill("Admin");
await page.getByPlaceholder("Password").fill("admin123");
await page.getByRole("button",{name:' Login '}).click();
await expect(page.getByRole("heading",{name:"Dashboard"})).toBeVisible();
await page.getByRole('link',{name:"PIM"}).click();
await expect(page.getByRole("heading",{name:"PIM", exact:true})).toBeVisible();
//// Add a new employee
await page.getByRole("button",{name:' Add '}).click();
await expect(page.getByText("Employee Full Name")).toBeVisible();
await page.getByPlaceholder("First Name").fill("minakshi");
await page.getByPlaceholder("Middle Name").fill("Ashish");
await page.getByPlaceholder("Last Name").fill("Parate");
 await page.getByRole("button",{name:" Save "}).click();

 const dropdownNationalty= page.locator('.oxd-input-group ')
 .filter({has:page.locator("label",{hasText:"Nationality"})})
 .locator('.oxd-select-text.oxd-select-text--active');
 await dropdownNationalty.selectOption("Indian");


 
// const dropdownNationalty= page.locator('.oxd-input-group')
// .filter({has:page.locator("label",{hasText:"Employee Id"})})
// .locator(".oxd-input.oxd-input--active");

//handle nationality dropdown

 


//nationality

});