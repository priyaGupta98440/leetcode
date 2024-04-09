/*
* Youtube channel Name = Ajay
 * 
*/

let returnValue = findSumPair([-5, -4, -3, -2, 0, 1, 2, 3, 4,5, 8])
console.log("returnValue::", returnValue);
returnValue = findSumPair([-5, -4, -3, -2, 0, 1, 2, 3, 4,6, 8])
console.log("returnValue::", returnValue);

// let size = [-5, -4, -3, -2, 0, 1, 2, 3, 4, 5, 8].length;
// function findSumPair(arr){
//     size = size-1

//     for(let i = 0; i < size;){  //if need  only one first pair then use this way. Not for all pair
//         // console.log("outside before size,i::",size,i)
//         let {left,right} ={left:arr[i],right:arr[size]};
//         let sum = left + right;
//         // console.log("left,right::",left,right,'---sum--->', sum);
//         if(sum < 0){
//             left = arr[i +1]
//             // console.log("Inside after i::",i)
//         }else if(sum > 0){
//             size = size - 1
//             // console.log("Inside after size::",size)
//             right = arr[size]
//         }else if(sum === 0){
//                 // console.log(left, right)
//                 return [left, right]
//         }
//     }
// }


function findSumPair(arr) {
    let left = 0; //i = 0
    let right = arr.length - 1 //size

    while (left < right) { //i < size;  -->if need only one first pair then use this way
        let sum = arr[left] + arr[right]
        // console.log(arr[left], arr[right], '-->', sum);

        if (sum < 0) {
            left++;
        } else if (sum > 0) {
            right--
        } else if (sum === 0) {
            // console.log(arr[left], arr[right], '-->', sum);
            // break;
            return [arr[left], arr[right]]
        }
    }
}

//Note :- single loop, time complexity = O(n) linear time.
         //two loop, time complexity = O(n2) Quardatic time