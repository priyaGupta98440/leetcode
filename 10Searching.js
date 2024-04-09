/**
 * Searching :- when seraching any thing in google, google is an example of seraching engine.
 */

const arr = ['priya', 'ajay', 'vijay', 'anuj', 'vivek'];

console.log(arr.includes('ajay')) //true
console.log(arr.includes('pp')) //false

console.log(arr.indexOf('vijay'))  // it need value and return +ve index
console.log(arr.findIndex(item=>item === 'vijay'))  // it need callback function and return +ve index
console.log(arr.find(item=>item === 'vijay')) // it need callback function and return value

console.log(arr.indexOf('ppp'))  // it need value and return index = -1
console.log(arr.findIndex(item=>item === 'ppp'))  // it need callback function and return index = -1
console.log(arr.find(item=>item === 'ppp')) // it need callback function and return value = undefined
