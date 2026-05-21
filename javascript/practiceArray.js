 let fruits=['apple','banana','mango'];
 console.log(fruits);
  fruits.push('grapes');
 console.log(fruits);
 console.log(fruits.sort());
 console.log(fruits.reverse());
 //function
 function add(a,b){
     return   a+b;
 }
 let sum=add(5,4);
 console.log(sum);
 //annonymus function----a function which does not have any name
 let sumInteger= function(c,d){
    return(c+d)
 }
 console.log(sumInteger(5,6));
  let day="monday";
  console.log(day.toLowerCase());
  console.log(day.toUpperCase());
  let day1="tuesday is funday";
  console.log(day1.split(" "));

  let student= {
    firstname: 'minakshi',
    lastName:" Parate",
    age:30,
    email: "minakshigonnade@gmail.com",
    isStudent: true,
    fullName: function(){
        return(this.firstname + " " + this.lastName);
    }
}
console.log(student.lastName);
  student.firstname = "ramesh";
 console.log(student.firstname);
 console.log(student);
  //delete the properties
 delete student.lastName;
 console.log(student);
 for ( let key in student)
 {
    console.log(student[key])
}
console.log(student.fullName());