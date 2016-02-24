class Person {
  greeting = 'Hi';

  constructor (name) {
    this.name = name;
  }

  greet () {
    console.log(this.greeting + ', ' + this.name + '.');
  }

}

class Pirate extends Person {
  greeting = 'Arrr';
}


var me = new Person('Riki Fridrich');
me.greet();

var john = new Pirate('John Long Silver');
john.greet();