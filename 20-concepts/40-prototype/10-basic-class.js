function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log('Hello ' + this.name);
};


var me = new Person('Riki');
me.greet();

var my_son = new Person('Alan');
my_son.greet();
