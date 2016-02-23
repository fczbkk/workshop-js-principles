




// local variable (function scope)

var animal = "dog";

function showAnimal() {
  var animal = "cat";
  console.log(animal);
}

showAnimal();         // -> cat
console.log(animal);  // -> dog
