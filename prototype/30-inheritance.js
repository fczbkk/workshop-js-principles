var Person = function (name) {
  this.name = name;
  this.greeting = 'Hello';
};

Person.prototype.greet = function () {
  console.log(this.greeting + ' ' + this.name + '!');
};

var Pirate = function (name) {
  Person.call(this);
  this.name = name;
  this.greeting = 'Arrr';
};

Pirate.prototype = Object.create(Person.prototype);
Pirate.prototype.constructor = Pirate;

var me = new Person('Riki Fridrich');
me.greet();

var john = new Pirate('John Long Silver');
john.greet();