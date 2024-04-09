/**
 * Linear seraching:- retrieve each element
 */

const users = [
{
    name:"abd",
    email:"abd@email.com"
},
{
    name:"rinku",
    email:"rinku@email.com"
},
{
    name:"priya",
    email:"priya@email.com"
}
]

function findUserUsingInBuiltFunction(arr, userName){
    /**
     * const finalValUsingFilter = arr.filter(item=>{
        if(item?.name === userName){
            return item;
        }
    });finalValUsingFilter
    console.log("arr:",arr)
    console.log(":",finalValUsingFilter)

// output:-    arr: [
//   { name: 'abd', email: 'abd@email.com' },
//   { name: 'rinku', email: 'rinku@email.com' },
//   { name: 'priya', email: 'priya@email.com' }
// ]
// finalValUsingFilter: [ { name: 'rinku', email: 'rinku@email.com' } ]
     */

/**
 *     const finalValUsingMap = arr.map(item=>{
        if(item?.name === userName){
            return item;
        }
    });
    console.log("arr:",arr)
    console.log("finalValUsingMap:",finalValUsingMap)

 * Output:- arr: [
  { name: 'abd', email: 'abd@email.com' },
  { name: 'rinku', email: 'rinku@email.com' },
  { name: 'priya', email: 'priya@email.com' }
]
finalValUsingMap: [ undefined, { name: 'rinku', email: 'rinku@email.com' }, undefined ]
 */

    const finalVal = arr.filter(item=>item?.name === userName);
    console.log("finalVal:",finalVal)

}

// findUserUsingInBuiltFunction(users,'rinku');

function findUser(arr, userName){
  for(let item of arr){
    if(item['name'] === userName){
        return true;
    }
  }
  return false;

}

console.log(findUser(users,'rinku'));
console.log(findUser(users,'rinku4'));