import{test,expect} from '@playwright/test';
import{PageManager} from '../pages/pageManager';
import testData from '../testdata/testData.json'


test('should login successfully and display dashboard', async({page})=>{

 const pm= new PageManager(page);
 await pm.loginPage.gotologinPage();
await pm.loginPage.login(testData.username,testData.password);
await  expect(pm.dashboardPage.dashboardHeading).toBeVisible();
});

test('should display error message for inavalid credentials', async({page})=>{
    
    const pm= new PageManager(page);
    await pm.loginPage.gotologinPage();
    await pm.loginPage.login('InvalidUser','InvalidPassword');
    await expect(pm.loginPage.errormessage).toBeVisible();
});