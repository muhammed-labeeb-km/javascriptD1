const readlineSync = require('readline-sync')

var ogPrice = readlineSync.question('What is the Orginal price :')
var sellPrice = readlineSync.question('What is the Selling price :')

var discount = ((ogPrice-sellPrice)/ogPrice)*100
var roundedDiscount =Math.round(discount)
console.log(`The discount percentage is ${roundedDiscount} %`);