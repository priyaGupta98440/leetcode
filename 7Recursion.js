/**
 * Recursion:- When a function calls itself that is called recursion.
 */

//Example:-

let counter = 1;
function like(num){
   if(counter > num){
      return;
   }
   console.log("Like me ",counter,"  num = ",num)
   counter++;

// like(); it take infinite
   like(num);
}

like(10);