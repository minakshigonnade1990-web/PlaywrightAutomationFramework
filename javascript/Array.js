var marks= new Array (30,40,50,70);
console.log(marks);

// var marks = new Array(6);

// var marks = new Array(20, 40, 50, 55, 70);

// console.log(marks);
var marks =[45,56,75,58];
console.log(marks);
marks[0]=65;
console.log(marks);//[65,56,75,58]
console.log(marks[3]);
console.log(marks.length);
console.log(marks.indexOf(75));
console.log(marks.includes(120));
pcm=marks.slice(0,3);
console.log(pcm);


//push()-----add element at end
marks.push(80);
console.log(marks);
//pop()----remove last index from array
marks.pop();
console.log(marks);
//unshift()----add element at first index
marks.unshift(90);
console.log(marks);
//shift()---remove 1st element
marks.shift();
console.log(marks);
// how to sum each array element
let sum=0;
for (let i=0;i<marks.length;i++){
    sum=sum+marks[i];
}
console.log(sum);
//reduce
let total= marks.reduce((sum,mark) => sum +mark,0);
console.log(total);
console.log(marks);
//Create new array with even numbers of score by using for loop
var score = [12,11,13,45,17,22,48] ;  

var evenscore =[];
for(let i=0; i<score.length; i++){
  if (score[i]%2 == 0){
     evenscore.push(score[i]);
}
}
console.log(evenscore);

//Create new array with even numbers of score by using Filter Method

let newFilterScore= score.filter(score => score%2==0);

console.log(newFilterScore); // Filter is used to filter the values based on specific condition

//map()
let mappesArray=marks.map(score=>score*2);
console.log(mappesArray);

//STRING Array

let fruits=['apple','banana', 'grapes','mango'];
console.log(fruits);
fruits.push('strawberry');
console.log(fruits);
//how to sort string element from array ascending
console.log(fruits.sort());
//descending--reverse
console.log(fruits.reverse());