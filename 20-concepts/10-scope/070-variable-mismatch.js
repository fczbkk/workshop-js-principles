




// variable mismatch

var animal = "dog";

function showAnimal() {
  console.log(animal);
}

function showFish() {
  animal = "fish";
  console.log(animal);
}

showAnimal();  // -> dog
showFish();    // -> fish
showAnimal()   // -> fish
