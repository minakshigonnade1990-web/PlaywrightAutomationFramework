//IF statement
let x;
let y=10;
if(x>y) {
    console.log("X is greater than y");
}
    else if (x<y) {
    console.log("x is less than y");
}
else if(x==y){
 console.log("x is equal to y");
}
else {
   console.log("x is not a number");
}
//while loop
let fuel=10;
while(fuel>0)
{
    console.log("car is running 15 km");
    fuel--;
}

//do while loop
fuel=10;
do{
    console.log('car is running at once'); 
    fuel-=1;
}
while(fuel>0);

//for loop
for(let i=0;i<=5;i++){
    console.log(i);
}
// factorial
let fact=1;
for( let i=1;i<=5;i++)
{
    fact=fact*i;
}
    console.log(fact);
//sum of first 5 numbers
//1+2+3+4+5
let sum=0;
for(let i=0;i<=5;i++){
    sum=sum+i;
    }
    console.log(sum);
