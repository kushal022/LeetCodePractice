//! 08 Problem:---> Function Composition:
/*
    Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function 
    composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input 
and returns one integer as output.

Example 1:

Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65

Example 2:

Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000

Example 3:

Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function
 

Constraints:

-1000 <= x <= 1000
0 <= functions.length <= 1000
all functions accept and return a single integer
*/

//Todo: Solution--->
//sol. 1
var compose1 = function(functions) {
    return function(x) {
        let acc = x;
        for(let i = functions.length-1; i >= 0 ; i--){
            acc = functions[i](acc);
        }
        return acc;        
    }
};

// const functions = [x => x + 1, x => x * x, x => 2 * x]

// let composedFun1 = compose1(functions)
// console.log(composedFun1(4)) //65



//sol. 2 (With reduceRight)
var compose2 = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};

// const functions = [x => x + 1, x => x * x, x => 2 * x]

// let composedFun2 = compose2(functions)
// console.log(composedFun2(4)) // 65


//todo:------------------ Function Composition: -------------------------
//f1:
function add(a,b){
    return a + b;
}

//f2:
function mulTwo(val){
    return val * 2;
}

//f3:
function square(val){
    return val * val;
}

//?------->
// const result = add(2,3) // 5
// console.log(square(result)) //25

//?------>
function addSquare(a,b){
    return square(add(a,b))
}
console.log(addSquare(2,3)) // 25
console.log(addSquare(2,4)) // 36

//?------> General Function 
// (just like Closure)
function compose(f1, f2, f3){
    return function(a, b){
        return f3(f2(f1(a,b)))
    }
}
const composedFun = compose(add,mulTwo,square);
console.log(composedFun(2,3)) //2+3 = 5*2 = 10*10 = 100

//?------> Modern JavaScript General Function 
const composeModern = (f1, f2, f3) => (a,b) => f3(f2(f1(a,b)))

const composedMod = composeModern(add,mulTwo,square)
console.log(composedMod(2,3)) // 100

//?------> General Function for number of functions and arguments
//f4:
function addArgs(args){
    return args[0] + args[1];
}

function composeAll(...funs){
    return function(...values){
        return funs.reduce((val, fn) => fn(val), values)
    }
}
const composedAll = composeAll(addArgs, mulTwo, square)// pass no of functions
console.log(composedAll(4,6))//400

//Modern
const composeAllModern = (...funs) => (...values) => funs.reduce((val,fn)=> fn(val) , values);

const composedAllMod = composeAllModern(addArgs, mulTwo, square)// pass no of functions
console.log(composedAllMod(4,6))//400
