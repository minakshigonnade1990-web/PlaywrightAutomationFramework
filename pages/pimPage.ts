import{Page} from '@playwright/test';
import {Helper} from '../utils/helper';
import { expect } from '@playwright/test';

export class PimPage{
    readonly page:Page;
    readonly helper:Helper;

    constructor(page:Page){
        this.page=page;
        this.helper=new Helper();
    this.page=page;
    }

    get pimLink(){
      return this.page.getByRole('link',{name:"PIM"});
    }
    get addButton(){
        return this.page.getByRole("button",{name:' Add '});
    }
    get employeeFullnameText(){
        return this.page.getByText("Employee Full Name");
    }
    get firstnameInput(){
        return this.page.getByPlaceholder("First Name");
    }
    get middlenameInput(){
        return this.page.getByPlaceholder("Middle Name");

    }
    get lastnameInput(){
    return this.page.getByPlaceholder("Last Name");
    }
    get employeeId(){
      return this. page.locator('.oxd-input-group')
.filter({has:this.page.locator("label",{hasText:"Employee Id"})})
.locator(".oxd-input.oxd-input--active")
    };
    async getEmployeeId(){ 
        return await this.employeeId.inputValue();
    }
 
    get employeeSaveButton(){
        return this.page.getByRole("button",{name:" Save "})
    };
    get personalDetailsHeading(){
   return this.page.getByRole("heading",{name:"Personal Details"})
    };

    get driverLicenceNumberInput(){
        return this.page.locator('.oxd-input-group')
.filter({has:this.page.locator("label",{hasText:" Driver's License Number"})})
.locator('.oxd-input.oxd-input--active')
    };
    get calenderInput(){
        return this.page.locator('.oxd-input-group')
 .filter({has: this.page.locator('label', {hasText: "Date of Birth"})})
 .getByPlaceholder('yyyy-dd-mm');
    }; 
    get dateOfBirthInput(){
        return this.page.locator('.oxd-date-input-calendar')

    }
    get nationalityDropdown(){
        return this.page.locator('.oxd-input-group ')
 .filter({has:this.page.locator("label",{hasText:"Nationality"})})
 .locator('.oxd-select-text-input')
    };
    get selectNationalityOption(){
        return this.page.locator('.oxd-select-dropdown');
    }
    get saveButton1(){
        return this.page.locator('.oxd-form-actions').filter({hasText:' * Required'})
        .getByRole('button',{name:"  Save "})
    } 
    
    async addEmployee(firstname:string, middlename:string,lastname:string){
         await this.pimLink.click();
       await expect(this.page.getByRole("heading",{name:"PIM", exact:true})).toBeVisible();
         await this.addButton.click();
         await this.firstnameInput.fill(firstname);
         await this.middlenameInput.fill(middlename);
         await this.lastnameInput.fill(lastname);
         
        
       await this .employeeId.fill(await this.getEmployeeId());
       
        console.log('Generated Employee Id :', await this.getEmployeeId());
        await this.employeeId.click();
         await this.employeeSaveButton.click();

    }
    async filldriverLicenceNumber(dlNumber:string)
    {
        await this.driverLicenceNumberInput.fill(dlNumber)
    
    }
    async nationality(country:string){
        await this.nationalityDropdown.click();
        await this.selectNationalityOption.click();

    }
    
    async fillCalender(date:string)
    {
        await this.calenderInput.fill(date); 
        await this.calenderInput.click();
       // await expect(this.calenderInput).toHaveValue(date);
        
    };
    async dateOfBirth(year:string,month:string,day:string){
        await this.calenderInput.click();
      await this.dateOfBirthInput.waitFor({state: 'visible',timeout: 15000})
      await this.dateOfBirthInput.getByText(year).click()
      await this.dateOfBirthInput.getByText(month).click();
      await this.dateOfBirthInput.getByText(day).click();
    }
    
}

