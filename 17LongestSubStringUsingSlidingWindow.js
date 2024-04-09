/**
 * Longest Substring without repeating:- abcabcbb --> o/p = abc and max =3
 */

function findLongestSubString(str){  //we can also solve using Brute and Force technique but it take TC= O(n*n)
    //using Sliding Window Technique And Set.
  let start =0;
  let end =0;
  let max =0;
  let longestSubstring = '';

  const uniqueSubString = new Set();

  while(end < str.length){
     if(!uniqueSubString.has(str[end])){
        // console.log('Before push end ', end, " str[end] ",str[end], ' max ',max,);
        // console.log("Before push uniqueSubString ",uniqueSubString);
        uniqueSubString.add(str[end])
        end++;
      //   const currentLength = end - start;
      //       if (currentLength > max) {
      //           max = currentLength;
      //           longestSubstring = str.substring(start, end);
      //       }
        max= Math.max(uniqueSubString.size, max);
        // console.log("After push uniqueSubString ",uniqueSubString,max);
        // console.log('After push end ', end, ' max ',max, " uniqueSubString ",uniqueSubString);
     }else{
        // console.log("---------------------------------------------------------");
        // console.log('Before delete start ', start, " str[start] ",str[start],"uniqueSubString ",uniqueSubString)
        // console.log("Before Delete uniqueSubString ",uniqueSubString);
        uniqueSubString.delete(str[start]);
        start++;
        // console.log("After Delete uniqueSubString ",uniqueSubString);
        // console.log('After delete start ', start, " str[start] ",str[start], ' uniqueSubString ',uniqueSubString);
     }
  }
  console.log("longestSubstring::",longestSubstring)
  return max;
}

console.log("final max ",findLongestSubString('abcabcbb')) //abc =3 ans
console.log("final max ",findLongestSubString('abcdceabcdceffdce')) //dceab =5 ans
console.log("final max ",findLongestSubString('abcbaddef')); //cbad =4 ans
console.log("final max ",findLongestSubString('abcpqrsabcpqrsbbpqrs')); //abcpqrs =7 ans
console.log("final max ",findLongestSubString('abcdpqrsabcepqrsbbpqrs'));//dpqrsabce =9 ans

/**
 * Explaination:  abcdceabcdceffdce
 * A)insert -- uniqueSubString = a,b,c,d   , end =3
 * str[end=3]= c -already ,str[start=0]=a, uniqueSubString.delete(a)=a will remove , start =1, uniqueSubString =b,c,d
 * B)str[end=3] =c -already ,str[start=1]=b, uniqueSubString.delete(b)=b will remove , start =2, uniqueSubString =c,d
 * C)str[end=3] =c -already ,str[start=12]=c, uniqueSubString.delete(c)=c will remove , start =3, uniqueSubString =d
 * C)str[end=3] =c -not ,insert -- uniqueSubString = d,c , end = 4
 * C)str[end=4] =e -not ,insert -- uniqueSubString = d,c,e , end = 5
 *  
 * 
 */