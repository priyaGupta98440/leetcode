// [1,2,3,4,4,4,5,5,6,7,7,8,8,9,9] -- sorted arry ---total = 15

//find index of element(7) in sorted array  (ans: index at 7 = 9)

//using divided and conquerer technique

//max = arr.length-1 , min = 0, mid = (max+ min)/2

function findIndex(arr, element) {
  let min = 0; //element=1
  let max = arr.length - 1; ///last element=9 index

  //  while(min<max){
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    console.log("Inside While mid", mid,' min, max ',min, max);
    if (arr[mid] === element) {
      console.log("equal case", min, max);
      return mid;
    } else if (arr[mid] < element) {
      console.log("less case", mid,min, max); //12,14=[8,9,9]  =(12+14)/2 =13=mid ----arr[13] =9 //min = 14 ,max =14
      min = mid + 1; //min = 15 ,max =14 --loop exit
    } else if (arr[mid] > element) { //(arr[mid] > element)
      console.log("greater case");
      max = mid - 1;
    }

  }
  return -1;
  // return 'element not found';

}

console.log(findIndex([1,2,3,4,4,4,5,5,6,7,7,8,8,9,9], 7)); //element = 7
// console.log(findIndex([1, 2, 3, 4, 4, 4, 5, 5, 6, 7, 7, 8, 8, 9, 9], 10)); //element = 10

//NOTE: time complexity = O(log(n))