function getGreeter (greeting) {
  return function (name) {
    return greeting + ' ' + name;
  }
}


var enGreet = getGreeter('hi');
var czGreet = getGreeter('ahoj');

console.log(enGreet('Riki'));
console.log(czGreet('Riki'));