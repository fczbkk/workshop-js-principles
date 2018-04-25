// Temporal Dead Zone - area between start of scope and "let" variable declaration.

// TMD in global scope
console.log(my_var); // undefined
console.log(my_let); // ReferenceError
var my_var;
let my_let;


// TMD in function scope
let my_test_variable = 'outside';
function myFunction () {
  console.log(my_test_variabale);
  let my_test_variable = 'inside';
}
myFunction();


// TMD in ES6 argument default values
function myOtherFunction (first_argument = second_argument, second_argument) {}
myOtherFunction(undefined, 'something');