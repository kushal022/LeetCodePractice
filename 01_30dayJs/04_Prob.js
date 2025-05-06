//! 04 Problem:--> Counter 2nd:
/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/
//todo: Solution
function createCounter(init) {
    let current = init;
  
    return {
      increment: function() {
        return ++current;
      },
      decrement: function() {
        return --current;
      },
      reset: function() {
        current = init;
        return current;
      }
    };
  }
  
  const counter = createCounter(5);
  console.log(counter.increment()) //6
  console.log(counter.reset()) //5
  console.log(counter.decrement()) //4

  //todo: Wrong:
  var createCounter2 = function(init) {
    let count=init;
    return {
        increment: function(){
            return count++;  //! Post Increment
        },
        decrement: function(){
            return count--;  //! post Decrement
        },
        reset: function(){
         count = init;
         return count;
        }
    }
};

const counter2 = createCounter2(5);

console.log(counter2.increment()); // returns 5, then count becomes 6
console.log(counter2.increment()); // returns 6, then count becomes 7

//todo: This uses the post-increment operator (count++), which returns the current value before incrementing. 
//todo: The same applies to count--.

//But if you want increment() to return the new value after incrementing (as the problem typically expects), 
//you should use the pre-increment operator (++count) instead.