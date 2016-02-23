




// closure example

function showAnimal(name, size) {

  function constructAnimalDescription() {
    return size + " " + name;
  }

  console.log(constructAnimalDescription());

}

showAnimal('dog', 'big');  // -> big dog
