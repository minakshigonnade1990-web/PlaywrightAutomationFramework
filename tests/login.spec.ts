import{test,expect} from '@playwright/test';
import{PageManager} from '../pages/pageManager';
import testData from '../testdata/testData.json';
import { ExcelUtil } from '../utils/excelUtils';


test('should login successfully and display dashboard', async({page})=>{

 const pm= new PageManager(page);
 await pm.loginPage.gotologinPage();
await pm.loginPage.login(testData.username,testData.password);
await  expect(pm.dashboardPage.dashboardHeading).toBeVisible();
});

test('should display error message for inavalid credentials', async({page})=>{
    
    const pm= new PageManager(page);
    const excelData= ExcelUtil.genData('./testdata/loginData.xlsx', 'Sheet1', 0);
    await pm.loginPage.gotologinPage();
    await pm.loginPage.login(excelData.useraName, excelData.password);
    await expect(pm.loginPage.errormessage).toBeVisible();
});