import{Page} from "@playwright/test";
import{LoginPage} from '../pages/loginPage';
import{DashboardPage} from '../pages/dashboardPage';
import{PimPage} from '../pages/pimPage';
import {Helper} from '../utils/helper';

export class PageManager{
   readonly page:Page;
   readonly loginPage:LoginPage;
   readonly pimPage:PimPage;
   readonly dashboardPage:DashboardPage;
   readonly  helper:Helper;
   
    constructor(page:Page){
        this.page=page;
        this.loginPage=new LoginPage(page);
        this.pimPage=new PimPage(page);
        this.dashboardPage= new DashboardPage(page);
        this.helper=new Helper();
          
    }
    
}     
        