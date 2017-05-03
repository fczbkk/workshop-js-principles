function createGreeter (name, greeting) {
  const data = {
    name: name,
    greeting: greeting
  };

  return {
    setName: function (input) {
      data.name = input;
      return data.name;
    },
    getName: function () {
      return data.name;
    },
    setGreeting: function (input) {
      data.greeting = input;
      return data.greeting;
    },
    getGreeting: function () {
      return data.greeting;
    },
    greet: function () {
      return data.greeting + ' ' + data.name + '!';
    },
    // for debugging and testing
    inspect: function () {
      return Object.assign({}, data);
    }
  }
}

const my_greeter = createGreeter('Riki', 'Nazdar');

console.log(my_greeter.greet());
my_greeter.setGreeting('Ahoj');
console.log(my_greeter.inspect());