(function () {
  'use strict';

  function add (a, b) {
    return a + b;
  }

  function subtract (a, b) {
    return add(a, 0 - b);
  }

  // console.log(add(1, 2));
  // console.log(multiply(1, 2));
  console.log(subtract(1, 2));

}());