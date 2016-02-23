function Person (name) {
  this.greeting = 'Hello';
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(this.greeting + ' ' + this.name);
};


function Pirate (name) {
  this.name = name;
  this.greeting = 'Yarrr!';
}

Pirate.prototype.greet = function () {
  Person.prototype.greet.call(this);
};




var me = new Person('Riki');
me.greet();

var john = new Pirate('John Long Silver');
john.greet();
