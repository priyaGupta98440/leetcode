/**
 * Find Maxmum occuring charater in string
 * "Hello worLd"
 *  o/p = l //becoz l is 3 times
 */

function maxOccurCharacter(str) {
    let map = {};
    str = str?.toLowerCase();
    let max = 1;
    let char = str?.[0]
    // for(let i = 0; i < str.length; i++){
    //     map[str[i]] = map[str[i]] ? map[str[i]] + 1 : 1;
    //     // map[str[i]] = (map[str[i]] || 0) + 1;
    // }
    str.split('').forEach(elementKey => {
        map[elementKey] = map[elementKey] ? map[elementKey] + 1 : 1;
    });

    console.log(map);
    for (let key in map) {
        if (map[key] > max) {
            max = map[key];
            char = key
        }
    }

    return char;
}

console.log('charactr which occur maximum times::',maxOccurCharacter('Hello WorLd'));
console.log('charactr which occur maximum times::',maxOccurCharacter('Hello WorLd DDD'));