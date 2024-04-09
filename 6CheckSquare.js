/**
 * array1 = [1,2,3,4]; array2=[1,4,9,16,25];
 * 
 * Condition:- i)if all array1[i] * array1[i] === array2[j] ---> true,
 *            ii) if any array1[i] * array1[i] !== array2[j] --> false ,
 */

/**Logic 1 */
// function isCheckSquare(array1,array2){
//     for(let i = 0; i < array1.length; i++){
//         let isSquare = false;
//         for(let j = 0; j < array2.length; j++){
//             if(array1[i] * array1[i] === array2[j]){
//                 isSquare = true;
//             }
//             if(j === array2.length-1){
//                if(!isSquare){
//                 return isSquare;
//                }
//             }
//         }
//     }
//     return true;
   
// }

// console.log("final result::",isCheckSquare([1,2,3,4],[1,4,2,16,25]));
// console.log("final result::",isCheckSquare([1,2,3,4],[1,4,9,16,25]));
//NOTE: TC = Quadratic TC = O(n*n)


/**Logic 2 */
//map ={ '1': 1, '4': 1, '5': 1, '16': 1, '25': 1 }
function isCheckSquare(array1, array2) {
    let map1 = {}; //by using map
    for (let j = 0; j < array2.length; j++) {
        map1[array2[j]] = (map1[array2[j]] || 0 )+1;
    }
    console.log("map1::", map1);

    // for(let key in map1){
    //     console.log("key::",key);
    // }

    let isSquare = false;
    for (let i = 0; i < array1.length; i++) {
        let square = array1[i] * array1[i];
        if (map1[square]) {
            isSquare = true;
            map1[square] -= 1;
        } else {
            isSquare = false;
            return isSquare;
        }
    }

    return isSquare;
 
}

console.log("final result::", isCheckSquare([1, 2, 3, 4], [1, 4, 5, 16, 25])); //false
console.log("final result::", isCheckSquare([1, 2, 3, 4], [1, 4, 9, 16, 25]));  //true
console.log("final result::", isCheckSquare([1, 2, 3, 4], [1, 4, 9, 16])); //true
//NOTE: TC = Linear TC = O(n)