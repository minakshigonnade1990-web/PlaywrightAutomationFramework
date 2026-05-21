function add(a,b)
{
    return (a+b);
}
let sum=add(3,5);
console.log(sum);

//1st anonymous function
let sumInteger= function(c,d)
{
    return(c+d);
}
console.log(sumInteger(10,30));
//2nd anonymous
let sumNumbers=(e,f)=>{
    return(e+f)
}
console.log(sumNumbers(4,4));