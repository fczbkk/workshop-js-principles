




// no block scope

var animal = "dog";

function showAnimal() {
  animal = "cat";
  console.log(animal);
}

showAnimal();         // -> cat
console.log(animal);  // -> cat
