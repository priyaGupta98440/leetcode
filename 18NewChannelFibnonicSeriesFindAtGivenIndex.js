/**
 * Youtube channel Name = RoadsideCoder
 * 
 * Fibnonaic series = 0,1,1,2,3,5,8,13,23,... so on.
 * 
 * case 1 : input = 3 (which is a index)
 * at 3 index, o/p = 2 
 * 
 * case 2 : input = 7 (which is a index)
 * at 7 index, o/p = 13 
 */

function findFibnonicNumberAtGivenIndex(index) {
    let i = 2;
    let series = [0, 1];

    while (i <= index) {
        series[i] = series[i - 1] + series[i - 2];
        i++;
    }

    return series[index]
}

// console.log(findFibnonicNumberAtGivenIndex(3));
// console.log(findFibnonicNumberAtGivenIndex(7));

/**Logic 2 --solve it using recursion */

function findFibnonicNumberAtGivenIndexUsingRecursion(index) {
    let i = 2;
    let series = [0, 1];

    if (index < 0 || !index) {
        return;
    }

    //using helper recursion
    function helperRecursion(i){
        if (i <= index) {
            series[i] = series[i - 1] + series[i - 2];
            i++;
            helperRecursion(i)
        }else{
            console.log("else i",i)
            return;
        }
    }
    helperRecursion(i)

    return series[index]
}

// console.log('using helper recursion',findFibnonicNumberAtGivenIndexUsingRecursion(3));
// console.log('using helper recursion',findFibnonicNumberAtGivenIndexUsingRecursion(7));

// ----------------------------------------------------------------
//recursion solution
const fibSeries = function(n){
   if( n<=1) return n;
   
   return fibSeries(n-1) + fibSeries(n-2);
}

/**
 *  fibSeries(n-1) + fibSeries(n-2)
 *  fibSeries(7-1=6) + fibSeries(7-2=5)
 * fibSeries(7-1=6) = fibSeries(6-1=5) + fibSeries(6-2=4)
 * fibSeries(7-2=5) & fibSeries(6-1=5) = fibSeries(5-1=4) + fibSeries(5-2=3)
 * fibSeries(6-2=4) & fibSeries(5-1=4) = fibSeries(4-1=3) + fibSeries(4-2=2)
 * fibSeries(5-2=3) & fibSeries(4-1=3) = fibSeries(3-1=2) + fibSeries(3-2=1)
 * fibSeries(4-2=2) & fibSeries(3-1=2) = fibSeries(2-1=1) + fibSeries(2-2=0)
 * fibSeries(3-2=1) & fibSeries(2-1=1) = 1
 * fibSeries(2-2=0) = 0 --- now calling stop
 * 
 * //now data strted to send 
 * fibSeries(4-2=2) & fibSeries(3-1=2) = fibSeries(2-1=1) + fibSeries(2-2=0) = 1 + 0 = 1;
 * fibSeries(5-2=3) & fibSeries(4-1=3) = fibSeries(3-1=2) + fibSeries(3-2=1) = 1 + 1 = 2;
 */
// console.log("using recursion ",fibSeries(7));

// ------------------------------------------------------------
//one liner recursion for it
const fib = (n)=> n<= 1 ? n : fib(n-1) + fib(n-2);
console.log("one liner using recursion ",fibSeries(7));