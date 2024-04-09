/**
 * i/p = [7,1,5,3,6,4] , o/p= 5 (buy = 1 and sell = 6) max profit come this time
 * i/p = [7,6,4,3,1] , o/p= 0
 */
//Using Brute Force Solution
function findMaximumProfit(arr) {
    if (arr.length === 0) {
        return;
    }
    let globalProfit = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let currentProfit = arr[j] - arr[i];
            console.log("currentProfit:", currentProfit);
            if (currentProfit > globalProfit) {
                globalProfit = currentProfit
                console.log("globalProfit:", globalProfit, "arr[j] - arr[i]", arr[j], arr[i]);
            }
        }
    }
    return globalProfit;
}

// console.log(findMaximumProfit([7,1,5,3,6,4]));
// console.log(findMaximumProfit([7,6,4,3,1])); //no profit


/**
 * Optimize solution :- using greedy algorithm
 * 
 * [7,1,5,3,6,4] 
 *let assume min = 7 => 1 (1<7)//minimum stock purchase price =1
 *let assume profit = 0 ,a) 5-1=4 => profit= 4, b) 3-1=2 => profit=4 , c)6-1=5 => profit=5, d)4-1=3 =>profit =5
 */

function findMaxProfit(arr) {
    let minStockPurchasedPrice = arr?.[0] || 0
    let maxProfit = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minStockPurchasedPrice) {
            minStockPurchasedPrice = arr[i]
        }

        maxProfit = Math.max(maxProfit, arr[i] - minStockPurchasedPrice)

        // if (i === arr.length - 1) {
        //     console.log("arr[i]:", arr[i], minStockPurchasedPrice, maxProfit);
        // }//just for test

    }
    return maxProfit
}

// console.log(findMaxProfit([7, 1, 5, 3, 6, 4])); //5
 console.log(findMaxProfit([7,1,5,3,6,4,0])); //5
// console.log(findMaxProfit([7,6,4,3,1])); //0