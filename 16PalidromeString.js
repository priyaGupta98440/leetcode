/**
 * Palidrome
 * DAD --->DAD --> true  (after reverse)
 * noon --->noon --> true
 * Priya --->ayirp --> false
 * 121 ----> 121 ---> true
 */

/**LOGIC 1 Using In-Built Function*/
function palidromeReverseStringChecking1(str){
   const reverse = str.split('').reverse().join('')

   if(reverse?.toLowerCase() === str?.toLowerCase()){
    return true
   }
   return false;
}
// console.log(palidromeReverseStringChecking1('DAD'));
// console.log(palidromeReverseStringChecking1('priya'));


// ----------------------------------------------------------
/**LOGIC 2 Using Built Own Logic Function*/
function palidromeReverseStringChecking2(str){
  let left =0;
  let right = str.length-1;
  while(left <= right){
    // console.log("str[left] , str[right]::",str[left] , str[right])
    if(str[left] !== str[right]){
        return false;
    }
    left++;
    right--;

  }
  return true
 }

//  console.log(palidromeReverseStringChecking2('DAD'));
//  console.log(palidromeReverseStringChecking2('priya'));

// ----------------------------------------------------------
 /**LOGIC 3 Using Built In Function*/

 function findPalidromNumber(num){
    return num < 0 ? false : num === +num?.toString()?.split('')?.reverse()?.join('')
 }
 console.log(findPalidromNumber(121));
 console.log(findPalidromNumber(10));