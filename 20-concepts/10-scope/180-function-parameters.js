




// function parameters are converted to scoped variables

function showAnimal(animal) {
  console.log(animal);
}

// ...is equivalent to...

function showAnimal(animal) {
  var animal = animal;
  console.log(animal);
}
