// Question 1: 

/***
 * answers by sahil madaan
 */
let arr= Array.from(Array(100), (_, i) => i + 1)

console.log(arr);

// Question 2: 

let arr= Array.from(Array(100), (_, i) => i + 1)
let y= arr.filter(function(element, index, array) {
  return (index % 2 === 1);
});
console.log({y});

//or
let arr1 = []
arr.forEach(element => {
    if(element%2==0) {
arr1.push(element)
    }
});




//question 3
const getSq = async (evenNumber) => {
      const x = await new Promise(function(resolve, reject){
        if(evenNumber%2 ==0){
         var squareq= evenNumber*evenNumber
        resolve(squareq)
        } else{
       var reason = new Error('number is odd');
            reject(reason); // reject
      }
      })
   return x
  }

getSq(4).then(x => console.log(x) )
        .catch(e=> console.log(e))

// Question 3: 

let q= y.map(x=> x*x)
console.log(q)



// Question 4: 
let sum= q.reduce((x,i)=> x+i)
console.log(sum)


// Question 5:
/*
1. Number of errors - 50
2. The resultant array- array containing squares of all even numbers from 0-100
3. Number of objects in the resultant array- 51
_________________________________________________________*/________________________________

// Q1: 
var x= 'Title_Name'
var but = `<button class="big" title=${x}>Submit</button>`;

// Q2:
function makeOL(array) {
  var ol = document.createElement("ol");
    for (var i = 1; i <= 30; i++) {
     var li = document.createElement ("li");
      ol.appendChild (li);
    }
    return ol;
}

// Q4: 
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3, 'one');
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1, 'two');
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2, 'three');
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3, 'four');
});
const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2, 'five');
});
const promise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1, 'six');
});
const promise7 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1, 'seven');
});

const promise8 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2, 'eight');
});

const promise9 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3, 'nine');
});

const promise10 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2, 'ten');
});

let arr= [promise1, promise2,promise3,promise4,promise5,promise6,promise7, promise8, promise9, promise10]

Promise.allSettled(arr).then((values) => {
  console.log(values);
});
