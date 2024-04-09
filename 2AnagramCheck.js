//Anagram condition
//e.g hello -  llheo -- true
//e.g hello -  llleo  -- false
//e.g priya -  apryi  -- true
//e.g priya -  apryai  -- false

//Condition :- i. lenght of both should be same otherwise return false
//Condition :- ii. letter of both should be same otherwise return false

function isAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    let counter = {}; //key-value pair {h:1, e:1, l:2, o:1}  ==== we are making map
    for (let letter1 of string1) {
        counter[letter1] = (counter[letter1] || 0) + 1; //initlize the each letter count with 0
        // if first time that letter key value is undefined
        //then add 1 for each found letter

    }
    console.log(counter);

    for (let letter2 of string2) {
        if (counter[letter2] === 0) {
            // console.log("if",letter2)
            return false
        }
        // console.log("outside",letter2)
        counter[letter2] -= 1;

        // return true;// if we use it here then it return in firsttime match value , it never check next one.
    }
    return true;
}

// const finalResults = isAnagram('hello','llheo');
// const finalResults = isAnagram('hello', 'llleo');
// console.log("finalResults::",finalResults);


/**
 * LOGIC 2
 */

function findAnagramUsingInBuiltFunc(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}
// console.log("final Results findAnagramUsingInBuiltFunc::", findAnagramUsingInBuiltFunc('hello', 'hlileo'));


/**
 * LOGIC 3
 */

function findAnagramUsingOwnLogic(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    let map1 ={};
    let map2 ={};
    for(let i = 0; i< str1.length; i++){
        map1[str1[i]] = (map1[str1[i]] || 0) + 1;
        map2[str2[i]] = (map2[str2[i]] || 0) + 1;
    }
    console.log("map1::",map1);
    console.log("map2::",map2);

    for(let key in map1){
       if(map1[key] !== map2[key]){
        return false
       }
    }
    return true;
}

console.log("final Results findAnagramUsingOwnLogic::", findAnagramUsingOwnLogic('hello', 'hileo'));
