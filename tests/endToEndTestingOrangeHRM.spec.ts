import{test,expect} from "@playwright/test";
test('Orange HRM',async({page})=>{
     // Navigate to the OrangeHRM login page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        // Log in to the application
    const Username= 'Admin';
    const Password= "admin123";

    
await page.getByPlaceholder("Username").fill(Username);
await page.getByPlaceholder("Password").fill(Password);
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

const employeeId= page.locator('.oxd-input-group')
.filter({has:page.locator("label",{hasText:"Employee Id"})})
.locator(".oxd-input.oxd-input--active");
 const emplopeeIdValue=await employeeId.inputValue();
await employeeId.fill(emplopeeIdValue);
console.log('Generated Employee Id :', emplopeeIdValue);
 await page.getByRole("button",{name:" Save "}).click();
await expect(page.getByRole("heading",{name:"Personal Details"})).toBeVisible();
//fill Employee details

// await page.getByRole('link',{name:"PIM"}).click();
// await employeeId.fill(emplopeeIdValue);
// await page.getByRole('button',{name:" Search "});

//  const employee = page.locator('.oxd-table-card').filter({hasText: emplopeeIdValue});
//  await expect(employee).toBeVisible();
//  await employee.click();
// await expect(page.getByRole('heading',{name:"Personal Details"})).toBeVisible();

 
//  Driver License Number
await page.locator('.oxd-input-group')
.filter({has:page.locator("label",{hasText:" Driver's License Number"})})
.locator('.oxd-input.oxd-input--active').fill('dl09744');

//Normal way to handle calender
let date =('1990-27-05');
await page.locator('.oxd-input-group')
.filter({has:page.locator('label',{hasText: "License Expiry Date"})})
.getByPlaceholder('yyyy-dd-mm').fill(date);

await expect(page.locator('.oxd-input-group')
.filter({has:page.locator('label',{hasText: "License Expiry Date"})})
.getByPlaceholder('yyyy-dd-mm')).toHaveValue(date);

//alternate way to handle calender
 const calendar = page.locator('.oxd-input-group')
 .filter({has: page.locator('label', {hasText: "Date of Birth"})})
 .getByPlaceholder('yyyy-dd-mm');
  await calendar.click();

  const year='2017';
const day =  '15' ;           // '5', { exact: true };
const month=" April";
  const calenderDropdown= page.locator('.oxd-date-input-calendar');
  await calenderDropdown.waitFor({state: 'visible',timeout: 15000});

  await calenderDropdown.getByText('2026').click();
  await calenderDropdown.getByText(year).click();
  await calenderDropdown.getByText("May").click();
  await calenderDropdown.getByText(month).click();
  await calenderDropdown.getByText(day).click();
  await expect(calendar).toHaveValue('2017-15-04');


  //to handle nationality
  const dropdownNationalty= page.locator('.oxd-input-group ')
 .filter({has:page.locator("label",{hasText:"Nationality"})})
 .locator('.oxd-select-text-input');
 await dropdownNationalty.click();
 await page.locator('.oxd-select-dropdown').getByText('American', {exact:true}).click();

// //handle gender radio button

//  page.locator('.oxd-input-group')
// .filter({has:page.locator("label",{hasText:"Gender"})})
// .locator('.oxd-radio-input oxd-radio-input--active --label-right oxd-radio-input')
// .getByText ("Male", {exact: true}).check();
// await expect(page.getByLabel ("Male", {exact: true})).toBeChecked();

//  // maritial status
//  const maritailDropdown= page.locator('.oxd-input-group')
//  .filter({has: page.locator('label',{hasText:" Marital Status"})})
//  .locator('.oxd-select-text.oxd-select-text--active');
//  await maritailDropdown.locator('.oxd-select-text-input').getByText('Single').click();

await page.locator('.oxd-form-actions').filter({hasText:' * Required'})
.getByRole('button',{name:"  Save "}).click();

 });