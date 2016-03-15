var greeting = 'hello';

function greetPerson (name) {
  return greeting + ' ' + name;
}


console.log(greetPerson('Riki'));
greeting = 'hi';
console.log(greetPerson('Riki'));