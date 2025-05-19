//! 12 Problem:---> Add Two Promises:
/*
Given two promises promise1 and promise2, return a new promise. 
promise1 and promise2 will both resolve with a number. 
The returned promise should resolve with the sum of the two numbers.
 

Example 1:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
Example 2:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
Output: -2
Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.
 

Constraints:

promise1 and promise2 are promises that resolve with a number
*/

//? solution:

var addTwoPromises = async function(promise1, promise2) {
    const [val1, val2] = await Promise.all([promise1,promise2])
    return val1 + val2
}

const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)) 
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
console.log(addTwoPromises(promise1,promise2))


//Todo:-------------------------- Concept--------------------------:
//? Synchronous --> 1.Executes line by line consecutively in a sequential manner.
//?                 2.code that waits for an operation to complete.

// console.log('Task-1')
// console.log('Task-2')
// console.log('Task-3')

//? Asynchronous --> Allows multiple operations to be performed concurrently without waiting.
//?                  Doesn't block the execution flow and allows the program to continue.
//?                  (I/O operations, network request, fetching data, Handled with Callbacks, Promises, Async/Await)


// setTimeout(function(){
//     console.log('Task-1')
// },3000)
// console.log('Task-2')
// console.log('Task-3')

//? Promises -->>

 //syntax
//  const myPromise = new Promise(Executive/Callback function(para1=resolve,para2=reject){
//           asynchronous code or logic
//  })

//consume -->
// then ---> for resolve.
// myPromise.then(function(){
    // logic
    // }).catch(error => Logic)
// catch ---> for reject.

// const myPromise = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('async Task')
//         resolve()
//     },3000)
//  })

//  myPromise.then(function(){
//     console.log('Promise Resolved')
//  })

//?---------------
//  const myPromise2 = new Promise(function(resolve,reject){
//     // let fileLoader = true;
//     let fileLoader = false;
//     if(fileLoader){
//         resolve('File Loaded')
//     }else{
//         reject('File Not Loaded')
//     }
//  })

//  myPromise2.then(function(value){
//     console.log(value)
//  }).catch(error => console.log(error))
 
//?------------------- Cleaner way
//  new Promise((resolve,reject)=>{
//     let fileLoader = true;
//     // let fileLoader = false;
//     if(fileLoader){
//         resolve('File Loaded')
//     }else{
//         reject('File Not Loaded')
//     }
//  }).then(value=>console.log(value)
//  ).catch(error => console.log(error))

//? Async/Await:
//?  Async --> makes a function return a promise.
//?  Await --> makes an async function wait for a promise.

// function loadFile(){
//     return new Promise((resolve,reject)=>{
//     // let fileLoader = true;
//     let fileLoader = false;
//     if(fileLoader){
//         resolve('File Loaded')
//     }else{
//         reject('File Not Loaded')
//     }
//  })
// }

// async function myFunc() {
//     try {
//         const value = await loadFile();
//         console.log(value)
//     } catch (error) {
//         console.log(error)
//     }
// }

// myFunc();

