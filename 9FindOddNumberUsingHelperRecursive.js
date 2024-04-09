/**
 * [1,5,2,3,4,7,6,9,8]
 * [1,3,5,7,9] - o/p
 * 
 * Helper function:- a inside function (i.e.child function/nested function) wil call again n again , 
 *        not parent function .i.e main function / outside func / closure function.
 * 
 * condition:- ele % 2 !== 0.
 */

function findEvenNumbers(arr){
    let oddList =[]
    function helperRecursive(arrList){
        console.log("Inside function calling.........",)
        if(arrList?.length === 0){
            return;
        }
        if(arrList[0] % 2 !== 0){
            oddList.push(arrList[0]);
        }
        /**Using Splice:- it change in original data. It return delete data */
        // const newarr = arrList.splice(0,1) //means remove 1 = one element at index 0= zero ..newarr =[1]
        // console.log("newarr::",newarr, "arrList::",arrList)
        // helperRecursive(arrList);
        // console.log("arrList.splice(1)", arrList.splice(1)) //it means it return from 1. But no deletion.

        /**Using Slice:-  it does not change in original data */
        console.log("arrList::",arrList,"arrList.slice(1)::",arrList.slice(1))
        helperRecursive(arrList.slice(1)); //it return always from 1 to last
    }

    helperRecursive(arr);
    return oddList;
}

console.log("final results odd number::",findEvenNumbers([1,5,2,3,4,7,6,9,8]))