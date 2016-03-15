function constructGreeting (separator) {
  return function (name) {
    return addPerson(separator, name);
  }
}

function addPerson (input, name) {
  return function (greeting) {
    return addGreeting(input + name, greeting);
  }
}

function addGreeting (input, greeting) {
  return greeting + input;
}


console.log(
  constructGreeting(' ')('Riki')('hello')
);