/**
 *  [8,2,4,1,3]
 * 
 * (j=i-1 always)
 * (not swap untill we get the correct position of current one from j=i-1 to 0)
 * Case :1 :- outer loop i = 1, j=0 -->inner run upto j >= 0
 * Case :2 :- outer loop i = 2, j=1 -->inner run upto j >= 0
 * Case :3 :- outer loop i = 3, j=2 -->inner run upto j >= 0
 * ...
 * ..and
 * Case :n-1 :- outer loop i = n-1, j=n-1-1 -->inner run upto j >= 0
 */

const insertionSorting =(arr)=>{
    for(let i = 1; i < arr.length; i++ ){
       let current = arr[i]; //because we cant lost the my current to swap at i..
       let j = i -1;
       while(j >= 0 && current < arr[j]){
    //    while(j >= 0){
    //     if(current < arr[j]){
    //          arr[j+1] = arr[j]
    //         j--;
    //     }//not work
        arr[j+1] = arr[j]
            j--;
       }
       arr[j+1] = current;
    }       

    return arr;
}

// console.log(insertionSorting([8,2,4,1,3]));
console.log(insertionSorting([8,2,4,1,4,3])); //if same then there is no need to swap
//case II, i=2                                                                 
//   j i
//[2,8,4,1,3] , i=2,j=1, curre = 4
//[2,8,8,1,3] , i=2,j=1, current =4 ,arr[j+1] = arr[j], j--(=0) ,loop exists
//[2,4,8,1,3] , arr[j+1=(0+1 =1)] = current (=4)

//case III, i=3                                                                
//     j i=3
//[2,4,8,1,3] , i=3,j=2, current =1 ,
//[2,4,8,8,3] , i=3,j=2, current =1 ,(if arr[j]> curr) arr[j+1] = arr[j], j-- (= 1)
//[2,4,4,8,3] , i=3,j=1, current =1 ,(if arr[j]> curr) arr[j+1(=2)] = arr[j(=1)], j-- (= 0)
//[2,2,4,8,3] , i=3,j=0, current =1 ,(if arr[j]> curr) arr[j+1(=2)] = arr[j(=1)], j-- (= -1) loop exit
 //[1,2,4,8,3], arr[-1 + 1(=0)] = current(=1)