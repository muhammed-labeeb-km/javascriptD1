In JavaScript, function declarations are hoisted, which means they are moved to the top of their containing scope during the compilation phase. This allows you to use a function before it's declared in your code. When you commented out the function and called it before the declaration, it still worked because of hoisting.


However, function expressions (like the one you're using) are not hoisted in the same way. They are only available in the code after the point where they are defined. In your code, you're trying to call the salary function expression before it's defined, which results in an error.


To fix the issue, you should move the function expression declaration before you call it:


**javascript code**
--------------------------------------------------------------------
var readlineSync = require('readline-sync');
var shambalam = readlineSync.question("What is your Salary :");
var otherIncomes = readlineSync.question("What are your other income amount :");

var salary = function (val, addUpp) {
    var value = parseInt(val) + parseInt(addUpp);
    console.log(`Total income will be ${value}`);
}

salary(shambalam, otherIncomes);

--------------------------------------------------------------------------



By moving the salary function expression declaration to the top of your code or before the point where you call it, you'll ensure that it's defined before you use it, and your code will work as expected.