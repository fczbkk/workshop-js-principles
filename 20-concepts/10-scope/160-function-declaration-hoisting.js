




// function declaration is hoisted variable

function showAnimal() {
  console.log("dog");
}

// ...is equivalent to...

var showAnimal = function () {
  console.log("dog");
}
