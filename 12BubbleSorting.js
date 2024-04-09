/**
 * Bubble Sorting:- It is a sorting algorithm where largest element at the top bubble up.
 */

function bubbleSorting(arr) { //condition:- 1st largest should e sorted.
    for (let i = arr.length - 1; i >= 0; i--) { //length =8
        for (let j = 0; j < i; j++) {
            // console.log("i ",i, " j ",j," arr::",arr);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
            console.log(arr);
        }
    }
    return arr;

}


// console.log(bubbleSorting([8, 3, 5, 7, 4, 2, 6, 1]));

//when i = 7 and j from 0 to 7
// [3, 8, 5, 7, 4, 2, 6, 1] 
// [3, 5, 8, 7, 4, 2, 6, 1]
// [3, 5, 7, 8, 4, 2, 6, 1]
// [3, 5, 7, 4, 8, 2, 6, 1]
// [3, 5, 7, 4, 2, 8, 6, 1]
// [3, 5, 7, 4, 2, 6, 8, 1]
// [3, 5, 7, 4, 2, 6, 1, 8]

/**LOGIC 2 */
function bubbleSortingOptimizedSolution(arr) { 
    for (let i = arr.length - 1; i >= 0; i--) { //length =8
        console.log("i ",i);
        let isSwapped;
        for (let j = 0; j < i; j++) {
            // console.log("i ",i, " j ",j," arr::",arr);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                isSwapped = true;
            }
            // console.log(arr);
        }
        // console.log(arr);
        if(!isSwapped){
           break;
        }
    }
    return arr;

}


// console.log(bubbleSortingOptimizedSolution([8, 3, 5, 7, 4, 2, 6, 1]));
console.log(bubbleSortingOptimizedSolution([8,1,2,3,4,5,6,7]));

//NOTE:TC = O(n*n)