var Person = (function() {

  var answer = 42;

  function getGreeting (name, greeting) {
    return greeting + ', ' + name + '!';
  }

  function Person(name) {
    this.name = name;
  }

  Person.prototype.getAnswer = function () {
    console.log(answer);
  };

  Person.prototype.greet = function() {
    console.log(getGreeting(this.name, 'Hello'));
  };

  return Person;

})();


var me = new Person('Riki');
me.getAnswer();
me.greet();
