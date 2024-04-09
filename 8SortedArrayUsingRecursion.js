/**
 *  [2, 3, 1, 4]
 * 
 * case 1: arr[i] === arr[j] :  i++  //acc.to chatgpt , no need to swap
 * case 2: arr[i] < arr[j] : i++
 * case 3: arr[i] > arr[j]:  swap , i++
 */
function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true;
}

/**
 * Logic 1
 */
// let arr = [2, 3, 1, 4];
// let arr = [1,3,2,4,1];
// let arr = [1, 3, 2, 1, 4, 1];
// let j = arr.length - 1;
// function sorting(arr) { //in this logic, first largest sorted.
//     let i = 0;
//     if (arr.length > 0) {
//         while (i < j) {
//             if (arr[i] === arr[j]) {
//                 console.log("If equal")
//                 i++;
//             } else if (arr[i] < arr[j]) {
//                 console.log("If less")
//                 i++;
//             } else if (arr[i] > arr[j]) {
//                 console.log("If greater", )
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//                 i++;

//             }
//         }
//         console.log("arr after while existed :::",arr)
//         if (isSorted(arr)) {
//             console.log("If isSorted")
//             return arr;
//         } else {
//             console.log("else")
//             j -= 1;
//             return sorting(arr); //recursively call
//         }

//     } else {
//         //todo error
//     }
// }

// console.log("final results sorting(arr)::", sorting(arr));


//Logic 2
let i = 0;
let j  = i + 1;
let newList=[]
function sorting(arr) { //in this logic, first smallest sorted. If we use recursion, then no need to use loop.
    console.log("arr for calling the sorting again and again :::",arr," i,j ",i,j," arr[i],arr[j] ",arr[i],arr[j]);
    
    if (arr.length > 0) {
        if (isSorted(arr)) {
            console.log("If isSorted")
            newList = arr;
            return;
        } else if (arr[i] === arr[j]) {
            console.log("If equal")
            i++;
            j++;
            sorting(arr)
        } else if (arr[i] < arr[j]) {
            console.log("If less")
            i++;
            j++;
            sorting(arr)
        } else if (arr[i] > arr[j]) {
            console.log("If greater", )
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i = 0;
            j = 1;
            sorting(arr)

        }
    } else {
        //todo error
    }
}

// let arr = [2, 3, 1, 4];
let arr = [2, 3, 1, 4,9,8,5];
// let arr = [1,3,2,4,2,1];
// let arr = [1,3,2,4,2,1];
// let arr = [1, 3, 2, 1, 4, 1];
sorting(arr)
console.log("final results on 2nd logic, newList::",newList);