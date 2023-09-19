const readlineSync = require('readline-sync');

const fname = readlineSync.question('Enter your First name: ');
const lname = readlineSync.question('Enter your Last name: ');
const age = readlineSync.question('Enter your age: ');
const email = readlineSync.question('Enter your email: ')

console.log(`
             First name is :${fname}!
             Last name is  :${lname} 
             Your age is : ${age}
             email is : ${email}`);