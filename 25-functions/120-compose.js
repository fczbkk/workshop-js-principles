function greet (name) {
  return 'hello ' + name;
}

function exclaim (text) {
  return text + '!';
}

console.log(
  exclaim(greet('Riki'))
);



function compose (fn1, fn2) {
  return function (input) {
    return fn2(fn1(input));
  }
}

var greetEnthusiastically = compose(greet, exclaim);

console.log(
  greetEnthusiastically('Riki')
);