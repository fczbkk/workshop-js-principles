




// scope chain - function has access to:
//   - its own variables
//   - its parent function's variables
//   - global variables

// global variable
var message = "this is";

function showAnimal() {

  // parent function's variable
  name = "dog";

  function constructAnimalDescription() {
    // function's own variable
    var size = "big";

    return message + " " + size + " " + name;
  }

  console.log(constructAnimalDescription());

}

showAnimal();  // -> this is big dog
