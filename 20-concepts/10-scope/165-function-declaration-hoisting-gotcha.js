




// works as expected

showAnimal();  // --> dog

function showAnimal() {
  console.log("dog");
}


// throws an error

showAnimal();  // --> undefined function

var showAnimal = function () {
  console.log("dog");
}
