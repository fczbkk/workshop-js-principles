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



var greeting = 'hello';

var greetPerson = cacheable(function (name, greeting) {
  return greeting + ' ' + name;
});




console.log(greetPerson('Riki', greeting));
greeting = 'hi';
console.log(greetPerson('Riki', greeting));