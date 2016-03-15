var me = {
  name: 'Riki'
};

console.log(me);


function addGreeting (person, greeting) {
  person.greeting = greeting;
  return person;
}


var me_with_greeting = addGreeting(me, 'hello');
console.log(me_with_greeting);
console.log(me);