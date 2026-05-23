import {faker} from '@faker-js/faker';

export class Helper{
    async generateUserData(){
        const firstName= faker.person.firstName;
        const middleName= faker.person.middleName;
        const lastName=faker.person.lastName;
          
        return{
            firstName: firstName(),
            middleName:middleName(),
            lastName:lastName()
        }

        
    }
}