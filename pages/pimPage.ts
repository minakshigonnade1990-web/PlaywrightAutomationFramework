import{Page} from '@playwright/test';

export class PimPage{
    readonly page:Page;
    
    constructor(page:Page){
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
    get employeeIdValue(){
        return this.employeeId.inputValue();

    };
    get saveButton(){
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
.filter({has:this.page.locator('label',{hasText: "License Expiry Date"})})
.getByPlaceholder('yyyy-dd-mm')
    }; 
    get dateOfBirthInput(){
        return this.page.locator('.oxd-date-input-calendar')

    }
    get saveButton1(){
        return this.page.locator('.oxd-form-actions').filter({hasText:' * Required'})
        .getByRole('button',{name:"  Save "})
    }

    async addEmployee(firstname:string, middlename:string,lastname:string){
         await this.pimLink.click();
          //await expect(this.employeeFullnameText).toBeVisible();
         await this.addButton.click();
         await this.firstnameInput.fill(firstname);
         await this.middlenameInput.fill(middlename);
         await this.lastnameInput.fill(lastname);
        
       //await this .employeeId.fill(this.employeeIdValue);
       //console.log('Generated Employee Id :', this.employeeIdValue);
         await this.saveButton.click();

    }
    async filldriverLicenceNumber(dlNumber:string)
    {
        await this.driverLicenceNumberInput.fill(dlNumber)
    
    }
    
    async fillCalender(date:string)
    {
        await this.calenderInput.fill(date)    
    };
    async dateOfBirth(year:string,month:string,day:string){
      await this.dateOfBirthInput.waitFor({state: 'visible',timeout: 15000})
      await this.dateOfBirthInput.getByText(year).click()
      await this.dateOfBirthInput.getByText(month).click();
      await this.dateOfBirthInput.getByText(day).click();
    }
    
}

