import{Page} from '@playwright/test'
import{DashboardPage} from '../pages/dashboardPage';

export class LoginPage{
    readonly page:Page;
    
    constructor(page:Page){
        this.page=page;
          }
         
get usernameInput(){
    return this.page.getByPlaceholder("Username")
    }
    
get passwordInput(){
    return this.page.getByPlaceholder("Password");

}
get loginButton(){
    return this.page.getByRole("button",{name:' Login '});
}
get errormessage(){
    return this.page.getByText('Invalid credentials');
}

async gotologinPage(){
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
}
async login(Username:string,Password: string){
await this.gotologinPage();
await this.usernameInput.fill(Username);
await this.passwordInput.fill(Password);
await this.loginButton.click();
}
}