// [1,2,3,4,5,6,7,8,9] --length = 9 , consecutive num =4
//i = 0 ,1 and j =0 , 1,2,3,4 =10
//i = 1 ,2 and j =1 , 2,3,4,5
//i = 2 ,3 and j =2 , 3,4,5,6
//i = 3 ,4 and j =3 , 4,5,6,7
//i = 4 ,5 and j =4 , 5,6,7,8
//i = 5 ,6 and j =5 , 6,7,8,9

// loop = 6

//condition = 9-4 = 5 + 1 = 6 

function findMaxSum(arr, consectiveNum) {
    let max = 0;
    if (consectiveNum === arr.length) {
        //TODO Error
        throw (new Error('consectiveNum exceed array length '))
    }
    for (let i = 0; i < arr.length - consectiveNum + 1; i++) {

        let temp = 0;

        // for( let j =i; j < i + consectiveNum; j ++){
        //     temp = temp + arr[j];
        // }

        for (let j = 0; j < consectiveNum; j++) {
            temp = temp + arr[j + i];
        }


        console.log("temp::", temp)
        if (max < temp) {
            console.log("if temp ,max::", temp, max)
            max = temp;
            console.log("else temp ,max::", temp, max)

        }
    }
    return max;
}

console.log(findMaxSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));