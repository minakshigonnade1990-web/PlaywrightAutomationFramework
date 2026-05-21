console.log("Data types in javascript");
let name="Minakshi";
console.log(typeof name); //Strig
let age=35;
console.log(typeof age); //Number
let isStudent= true;
console.log(typeof isStudent);// Boolean
let searchValue=null;
console.log(typeof searchValue);// object
console.log(searchValue);//null
let searchValue1='laptop';
console.log(typeof searchValue1); //string
let data;
console.log(typeof data); //undefined
let bigIntValue =125486469759676n;
console.log(typeof bigIntValue );// BigInt
let x=Symbol('mySymbol');
console.log(typeof x); //Symbol

//non-primitive data type
let ob1={name: 'john' , age:30};
console.log(typeof ob1);
console.log(ob1); //{name: 'john' , age:30}
let ob2 =ob1;
console.log(ob2); //{name: 'john' , age:30}
ob2.name= "Alice";
console.log(ob1); //{name: 'Alice' , age:30}
console.log(ob2); //{name: 'Alice' , age:30}

//primitive data type
let student1="Ramesh";
let student2= student1;
console.log(student1);//Ramesh
console.log(student2); //Ramesh
student2= "Suresh";
console.log(student2);//Suresh
console.log(student1);//Ramesh
let fruits=["apple","Banana","Cherry"];
console.log(fruits);
function add()
{
    console.log('this is a function')

};