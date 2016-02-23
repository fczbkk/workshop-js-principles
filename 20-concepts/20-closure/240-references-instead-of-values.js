




// closure stores references to parent's variables, not their values

function animal() {

  // semi-private variable
  var stored_name = "dog";

  return {
    getName: function () {
      return stored_name;
    },
    setName: function (new_name) {
      stored_name = new_name;
    }
  }

}

var my_animal = animal();
my_animal.getName();  // -> dog

my_animal.setName("cat");
my_animal.getName();  // -> cat

typeof my_animal.stored_name;  // -> undefined
