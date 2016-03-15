var me = {
  name: 'Riki'
};

console.log(me);


function clone (input_object) {
  var cloned_object = {};
  for (var key in input_object) {
    cloned_object[key] = input_object[key];
  }
  return cloned_object;
}


function addGreeting (person, greeting) {
  var result = clone(person);
  result.greeting = greeting;
  return result;
}


var me_with_greeting = addGreeting(me, 'hello');
console.log(me_with_greeting);
console.log(me);