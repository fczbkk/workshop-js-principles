function getSeparator () {
  return ' ';
}

function addPerson (input) {
  return input + 'Riki';
}

function addGreeting (input) {
  return 'hello' + input;
}

console.log(
  addGreeting(addPerson(getSeparator()))
);