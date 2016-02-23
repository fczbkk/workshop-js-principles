





// IIFE with parameters

(function (inner_variable) {/* insert code here */})(outer_variable);

var outer_variable = "something";
(function (inner_variable) {
  console.log(inner_variable);
})(outer_variable);

// -> something
