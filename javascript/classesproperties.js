export class Person{

    constructor(firstName,lastName,age){
        this.firstName=firstName,
        this.lastName= lastName,
        this.age=age
    }
  

    fullName(){
        return this.firstName +" "+ this.lastName
    }
get location(){
    return "Pune"
}
}
let person1= new Person("minakshi","Parate",35);
console.log(person1.age);
console.log(person1.location);
console.log(person1.fullName());
console.log(person1.lastName);