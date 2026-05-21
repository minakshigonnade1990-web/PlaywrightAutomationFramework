import{Page} from "@playwright/test";
import{LoginPage} from '../pages/loginPage';
import{DashboardPage} from '../pages/dashboardPage';
import{PimPage} from '../pages/pimPage';

export class PageManager{
   readonly page:Page;
   readonly loginPage:LoginPage;
   readonly pimPage:PimPage;
   readonly dashboardPage:DashboardPage;
   
    constructor(page:Page){
        this.page=page;
        this.loginPage=new LoginPage(page);
        this.pimPage=new PimPage(page);
        this.dashboardPage= new DashboardPage(page);
          
    }
    
}     
        