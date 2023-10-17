var readlineSync = require('readline-sync')

var name = readlineSync.question("give the text :")
var arr = Array.from(name)
console.log(arr);

console.log(arr.indexOf('r'))
console.log(arr.indexOf('z'));


// Output
// -----------------------------
// give the text :Hi Bro
// [ 'H', 'i', ' ', 'B', 'r', 'o' ]
// 4
// -1
// 
