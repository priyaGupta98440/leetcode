//[1,1,2,2,3,4,4,5,6,6]  -- [1,2,3,4,5,6]  --sorted array

// i j  //if same then j++
//[1,1,2,2,3,4,4,5,6,6]
// i   j 
//[1,1,2,2,3,4,4,5,6,6]
//   i   j 
//[1,2,2,2,3,4,4,5,6,6]
//   i     j 
//[1,2,2,2,3,4,4,5,6,6]
//     i     j 
//[1,2,3,2,3,4,4,5,6,6]   ....and so on

//   i     j  //if not same i--> , arr[i] = arr[j] ,j++
//[1,2,2,2,3,4,4,5,6,6]

function countUniqueValue(arr) {
    console.log(arr, ':::')
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        console.log(arr);
        if (arr[i] !== arr[j]) {
            console.log("arr", arr)
            console.log("if", i, j)

            i++;
            arr[i] = arr[j];

            console.log("if after", i, j)
            console.log("arr after", arr)
        }
    }
    // return i + 1; //because i start with 0... i=5 + 1
    // return arr[i]; //it return single last element
    return arr.splice(0,i+1); //it return array
}

console.log(countUniqueValue([1, 1, 2, 2, 3, 4, 4, 5, 6, 6]));

//NOTE: Time complexity -- o(n) --linear



//logic 2  --> using map --cant work.
// function countUniqueValueUsingMap(arr){
//     let map1 ={};
//     for (let i = 1; i < arr.length; i++) {
//         console.log(arr);
//         map1[arr[i]] = (arr[i] || 0) + 1;
//     }

//     let arr =[]
//     for(let key in map1){
//         arr = arr
//     }
// }