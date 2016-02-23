




// function expressions are hoisted differently

var showAnimal = "GOTCHA!";

function showAnimal() {
  console.log("dog");
}

console.log(typeof showAnimal);  // -> string

// ...is equivalent to...

var showAnimal = function () {
  console.log("dog");
}

var showAnimal = "GOTCHA!";

console.log(typeof showAnimal);  // -> string
