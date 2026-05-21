let student={
     firstName:"Minakshi",
    lastName:"Parate",
    age:35,
    email:"minakshigonnade1990@gmail.com",
    isActive:true,
     fullName: function()
     {
        return this.firstName +" "+ this.lastName
     }
}
//how to access objects & its propertied
console.log(student);
console.log(student.age);
console.log(student.email);
console.log(student.fullName());
console.log(student['age']);
//how to update
student.firstName= 'Anaya'
console.log(student);
//how to delete
delete student.lastName;
console.log(student);
//how to check properties available or not
console.log('gender' in student);
// //how to iterate all properties
for(let x in student){
console.log(student[x]);
}