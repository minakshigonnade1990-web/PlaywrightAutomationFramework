import{test,expect} from '@playwright/test';
import{PageManager} from '../pages/pageManager';
import testData from '../testdata/testData.json';

test('add a new employee', async({page})=>{
    const pm= new PageManager(page);
await pm.loginPage.gotologinPage(); //call method gotologinPage from loginPage
//await pm.loginPage.login("Admin","admin123"); //call method login from loginPage
await pm.loginPage.login(testData.username,testData.password); //call method login from testData.json
   
await  expect(pm.dashboardPage.dashboardHeading).toBeVisible();
 
 //await expect(pimPage.employeeFullnameText).toBeVisible();

//await pimPage.employeeId.fill(pimPage.employeeIdValue);
 const userdata = await pm.helper.generateUserData();
 console.log(userdata);

 //await pm.pimPage.addEmployee("Minakshi","Ashish","Parate");//call method addEmployee from pimPage

await pm.pimPage.addEmployee(userdata.firstName, userdata.middleName, userdata.lastName);//call method addEmployee from pimPage

 await expect(pm.pimPage.personalDetailsHeading).toBeVisible();
 await pm.pimPage.driverLicenceNumberInput.fill('dl09744');

 await pm.pimPage.nationality("Indian");
 await pm.pimPage.selectNationalityOption.getByText('Indian', {exact:true});

 await pm.pimPage.calenderInput.click();
 await pm.pimPage.calenderInput.fill("1990-27-05");
 await expect(pm.pimPage.calenderInput).toHaveValue("1990-27-05");

await pm.pimPage.dateOfBirthInput.getByText('2026').click();
await pm.pimPage.dateOfBirthInput.getByText("2017").click()
await pm.pimPage.dateOfBirthInput.getByText("May").click()
await pm.pimPage.dateOfBirthInput.getByText("April").click();
await pm.pimPage.dateOfBirthInput.getByText("15").click();
await expect(pm.pimPage.calenderInput).toHaveValue("2017-15-04");

await pm.pimPage.saveButton1.click()





});