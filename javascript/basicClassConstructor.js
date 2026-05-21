
//classes&properties---- 

//Classes and Its properties
//Constructor is a special method that is used to initialize the object properties when we 
// create an object of the class. It is called automatically when we create an object of the class. It is defined using the constructor keyword.

export class Person
{
constructor(firstName,lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age=age;
  }
  fullName(){
    return ( this.firstName + " " + this.lastName)
  }
get location(){
    return "Mumbai"
}
// gender =male;


}
let person = new Person("Minakshi","Parate",35);
console.log(person.age);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.location);
console.log(person.fullName());
let person1= new Person("Anaya","Parate",9);
console.log(person1.fullName());
console.log(person.gender);