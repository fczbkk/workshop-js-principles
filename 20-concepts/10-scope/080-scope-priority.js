




// local variables have priority over global variables

var animal1 = "dog";
var animal2 = "cat";

function showAnimals() {
  var animal2 = "fish";
  console.log(animal1);
  console.log(animal2);
}

showAnimals();  // -> dog, fish
