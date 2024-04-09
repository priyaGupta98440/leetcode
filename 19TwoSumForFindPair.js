/**
 * CASE:1
 * I/p =[2,3,4,5,6] , target = 9 , arr[1] + arr[4] =9 or arr[2] + arr[3] =9
 * o/p =[1,4] or [2,3]
 * 
 * CASE:2
 *  I/p =[1,2,4] , target = 3 , arr[0] + arr[1] = 3
 * o/p =[0,1]
 */

//Logic 1 :-If array is sorted
function twoSum(arr, target) {  //this solution is not give all possible value
    if (arr.length === 0) {
        return 'please enter value';
    }
    let left = 0;
    let right = arr.length - 1
    let allPossibleCase =[]
    while (left < right) {
    // while (left <= right) {
        if (arr[left] + arr[right] === target) {
            allPossibleCase.push([left, right])
            right--;
            // left++; //even we comment it still we get same value
            // return [left, right]
        } else if (arr[left] + arr[right] > target) {
            right--;
        } else {
            left++;
        }
    }
    return allPossibleCase
    // return 'not found'

}

// console.log(twoSum([1, 2, 4, 6], 8)); //[ 1, 3 ] 
// console.log(twoSum([1, 2,2, 4, 6], 8)); //[ 1, 4 ] ,[3,3],[2,4] -->this solution is failed for this case
// console.log(twoSum([2,3,4,5,6], 9)); //[[ 1, 4 ] , [ 2, 3 ] ] or [ [1, 4], [2, 3], [3, 2], [4, 1] ]
// console.log(twoSum([1, 2, 3, 4, 5, 6], 7)); // [ [ 0, 5 ], [ 1, 4 ], [ 2, 3 ] ]
// console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); //while (left <= right) {} [ [ 0, 8 ], [ 1, 7 ], [ 2, 6 ], [ 3, 5 ], [ 4, 4 ] ]
// console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); //while (left < right) {} [ [ 0, 8 ], [ 1, 7 ], [ 2, 6 ], [ 3, 5 ]] 

/**
 * Using brute force solution :- to get all possibilities --> 50%  ---TC= O(n*n)
 */
function twoSumUsingBruteForceSolution(nums, target) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push([i, j]);
            }
        }
    }
    return result;
}
// console.log("twoSumUsingBruteForceSolution::",twoSumUsingBruteForceSolution([2,3,4,5,6], 9));//[ [1, 4], [2, 3], [3, 2], [4, 1] ]
// console.log("twoSumUsingBruteForceSolution::",twoSumUsingBruteForceSolution([1, 2, 3, 4, 5, 6], 7)); // [ 0, 5 ], [ 1, 4 ], [ 2, 3 ] ]
// console.log("twoSumUsingBruteForceSolution::",twoSumUsingBruteForceSolution([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // [ [ 0, 8 ], [ 1, 7 ], [ 2, 6 ], [ 3, 5 ]]


/*
*Logic 3 :-If array is not sorted
nums = [2,7,11,15], target = 9
map={
  "2":1, //0+1 is index  //9-2=7 map[7]=2 if(map[7])-->false
  "7":2,//1+1 is index  //9-7=2 map[2]=1 if(map[2])-->true return [1,map[2]-1]=[1,0]
  "11":3,
  "12":4,
}
*/
var twoSumWithOptimalSolution = function(nums, target) {
    let map ={};
    let allPairs =[]
    for(let i =0; i< nums.length; i++){
        console.log("before map::",map)
        if(map[target - nums[i]] >= 0){ //map[9 - 7]=map[2] = 1
            // allPairs.push([map[target - nums[i]]-1,i]);
            return [map[target - nums[i]],i]
        }else{
            map[nums[i]] = i;
        }
        console.log("map::",map)
    }
    // return allPairs;
};

// console.log(twoSumWithOptimalSolution([2,7,11,15],9));
// console.log(twoSumWithOptimalSolution([3,2,4],6));
// console.log(twoSumWithOptimalSolution([3,3],6));
console.log(twoSumWithOptimalSolution([3,2,3],6));
// console.log(twoSumWithOptimalSolution([1, 2, 4, 6], 8)); //[ 1, 3 ] ,[2,2]
// console.log(twoSumWithOptimalSolution([1, 2, 3, 4, 5, 6], 7)); // [ [ 0, 5 ], [ 1, 4 ], [ 2, 3 ] ]