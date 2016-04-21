var Person = function (name) {
  this.name = name;
};

var me = new Person('Riki Fridrich');
var stranger = new Person('stranger');

console.log(me);
console.log(stranger);