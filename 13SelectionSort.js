/**
 * Selection Sort:- Smallest element sort first
 *  [8, 3, 5, 7, 4, 2, 6, 1] --> always take first element is min element.
 *  If any get less then min element ,Nothing will change only pointer point this new got.
 * and still continue check to remaining then finally swap min element with first element.
 * NOW finally only first element is sorted.
 * 
 * For remaining outer loop, we will do.
 */

// function selectionSort(arr){
//     for(let i = 0; i< arr.length ; i++){
//         minElement = arr[i];
//         console.log("minElement",minElement);
//         let k ;
//         for(let j = i + 1; j< arr.length ; j++){
//             if(minElement > arr[j]){
//                 minElement = arr[j];
//                 k= j
//             }
//         }
//         if(k){
//             let temp = arr[i];
//             arr[i] = minElement; 
//             arr[k] = temp;
    
//             console.log("i::",i, "k::",k ," temp ", temp,"minElement",minElement, "arr:",arr)
    
//         }
        
//     }
//     return arr;
// }
// console.log(selectionSort( [8, 3, 5, 7, 4, 2, 6, 1]));


function selectionSort(arr){
    for(let i = 0; i< arr.length ; i++){
        min = i;
        console.log("min",min);
        for(let j = i + 1; j< arr.length ; j++){
            if(arr[min]> arr[j]){
                min = j
            }
        }
        if( i !== min){
            let temp = arr[i];
            arr[i] = arr[min]; 
            arr[min] = temp;
    
            console.log("i::",i, "min",min ," temp ", temp, "arr[min]:",arr[min],"arr:",arr)
    
        }
        
    }
    return arr;
}
console.log(selectionSort( [8, 3, 5, 7, 4, 2, 6, 1]));