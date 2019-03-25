class Person {

  constructor (name) {
    this.name = name;
  }

  getGreeting () {
    return 'Hi';
  }

  greet () {
    console.log(this.getGreeting() + ', ' + this.name + '.');
  }

}

class Pirate extends Person {

  constructor (name) {
    super(name.toUpperCase())
  }

  getGreeting () {
    return 'Arrr';
  }

}

const me = new Person('Riki Fridrich');
me.greet();

const john = new Pirate('John Long Silver');
john.greet();
