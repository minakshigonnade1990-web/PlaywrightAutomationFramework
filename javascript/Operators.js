console.log('Types of operators');
let a=10;
let b=5;
let addition=(a+b);
console.log(addition);
let addition1=20+8;
console.log(addition1);
let substraction=(a-b);
console.log(substraction);
let multiplication=(a*b);
console.log(multiplication);
let modulus=(a%b);
console.log(modulus);//remainder

//Assignment operators
let x=50;
x=x+5; //equivalent to x+=5//55
x+=5; //equivant to x=x+5;//60
console.log(x);//60
 x-=10; //equivalent to x=x-10
console.log(x);//50
x*=10//equivalent to x=x*10
console.log(x);//500
x/=2//equivalent to x=x/2
console.log(x);//250

//comparision operator
let isequal=a==b;//is equql to
console.log(isequal);//false
let c=10;
let d="10";

let isstrictequal=a===b;//is strict equal to//copare value & its data types
console.log(isstrictequal);//false

let notequal=a!=b//not equal to
console.log(notequal);//true

let islessthan=a>b;//
console.log(islessthan);//true

let isgreaterthan=a<b;
console.log(isgreaterthan);//false

let isgreaterthanorequalto= 20>=20;
console.log(isgreaterthanorequalto);//true

let islessthanorequalto=21<=20;
console.log(islessthanorequalto); //false
//logical operator
a=10, b=20;
let andOperator =(a>5 && b>15); //multiplication
console.log(andOperator); //true

let orOperator=(a>15|| b>25);// addition
console.log(orOperator); //false

let notOperator= !(a>5);
console.log(notOperator);//false

//String Opertors
let firstName ="Ramesh";
let lastName="Kumar";
let userName = firstName + "  " + lastName; // concatenation
console.log(userName);