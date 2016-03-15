function greetPerson (greeting, person) {
  return greeting + ' ' + person;
}

function sayHelloTo (person) {
  return greetPerson('hello', person);
}

console.log(
  sayHelloTo('Riki')
);