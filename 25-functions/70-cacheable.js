function calculate (input) {
  var result = 0;
  for (var i = 0; i < input * 1000000000; i++) {
    result += i;
  }
  return result;
}

console.log(calculate(1));
console.log(calculate(2));
console.log(calculate(2));


/*
function cacheable (fn) {
  var memory = {};

  return function () {
    var key = JSON.stringify(arguments);
    if (typeof memory[key] === 'undefined') {
      memory[key] = fn.apply(fn, arguments);
    }
    return memory[key];
  }
}


var calculateFast = cacheable(calculate);

console.log(calculateFast(1));
console.log(calculateFast(2));
console.log(calculateFast(2));

*/