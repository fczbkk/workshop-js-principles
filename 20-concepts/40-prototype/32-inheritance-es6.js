class Person {

  greeting = 'Hello';

  constructor (name) {
    this.name = name;
  }

  greet () {
    console.log(this.greeting + ' ' + this.name);
  }

}

class Pirate extends Person {

  greeting = 'Yarrrr!';

}


const me = new Person('Riki');
me.greet();

const john = new Pirate('John Long Silver');
john.greet();