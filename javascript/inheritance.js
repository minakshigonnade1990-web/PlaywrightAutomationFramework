//Inheritence-
//Inheritence is the process of aquiring all methods and variables of parent class 


import {Person} from "./basicClassConstructor.js" ;

 class Pet extends Person {
constructor(firstName,lastName, age){
    super(firstName,lastName, age)
    }

//Method Overriding- Method overriding is a feature that allows a subclass to provide 
// a specific implementation of a method that is already provided by its parent class.
//  The implementation in the subclass overrides the implementation in the parent class.

get location(){
    return "pune"
}
}
let pet= new Pet("tom","joe",2);
console.log(pet.firstName);
console.log(pet.lastName);
console.log(pet.age);
console.log(pet.fullName());
console.log(pet.location);