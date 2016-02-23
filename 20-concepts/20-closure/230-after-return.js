





// closure has access to outer function's variable even if it already returned

function getAnimal(name) {
  function showAnimal(size) {
    console.log(size + " " + name);
  }
  return showAnimal;
}

var my_animal = getAnimal("dog");

// at this point, the function `getAnimal()` already returned

my_animal("big");  // -> big dog
