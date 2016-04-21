var Person = function (name) {
  this.name = name;
};

Person.prototype.greet = function () {
  console.log('Hello ' + this.name + '!');
};

var me = new Person('Riki Fridrich');
me.greet();

var stranger = new Person('stranger');
stranger.greet();