




// assigning value to undefined variable creates variable in global scope

function showAnimal() {
  animal = "dog";
  console.log(animal);
}

console.log(animal);  // -> undefined
showAnimal();
console.log(animal);  // -> dog
