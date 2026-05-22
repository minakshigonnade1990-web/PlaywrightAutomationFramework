import{test,expect} from '@playwright/test';
//import{LoginPage} from '../pages/loginPage';
//import{PimPage} from '../pages/pimPage';
//import{DashboardPage} from '../pages/dashboardPage';
import{PageManager} from '../pages/pageManager';
import testData from '../testdata/testData.json';


test('add a new employee', async({page})=>{
    const pm= new PageManager(page);
    //const loginPage=new  LoginPage(page);
await pm.loginPage.gotologinPage(); //call method gotologinPage from loginPage
//await pm.loginPage.login("Admin","admin123"); //call method login from loginPage
await pm.loginPage.login(testData.username,testData.password); //call method login from loginPage

//const dashboardPage = new DashboardPage(page);
   
await  expect(pm.dashboardPage.dashboardHeading).toBeVisible();
 
    // const pimPage=new PimPage(page);
 //await expect(pimPage.employeeFullnameText).toBeVisible();

//await pimPage.employeeId.fill(pimPage.employeeIdValue);

 await pm.pimPage.addEmployee("Minakshi","Ashish","Parate");//call method addEmployee from pimPage
 await expect(pm.pimPage.personalDetailsHeading).toBeVisible();
 await pm.pimPage.driverLicenceNumberInput.fill('dl09744');
 await pm.pimPage.calenderInput.fill("1990-27-05");
    await expect(pm.pimPage.calenderInput).toHaveValue("1990-27-05");
    await pm.pimPage.dateOfBirthInput.getByText('2026').click();
await pm.pimPage.dateOfBirthInput.getByText("2017").click()
await pm.pimPage.dateOfBirthInput.getByText("May").click()
await pm.pimPage.dateOfBirthInput.getByText("April").click();
await pm.pimPage.dateOfBirthInput.getByText("15").click();

//await expect(pm.pimPage.dateOfBirthInput).toHaveValue("2017-15-04");
await pm.pimPage.saveButton1.click()





});