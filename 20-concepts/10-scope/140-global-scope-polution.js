




// poluting global namespace is bad, mmmmmkay?

// your script
var animal = "dog";
function showDog() {
  console.log(animal);
}

// somebody else's script
var animal = "cat";
function showCat() {
  console.log(animal);
}

// you're screwed
showDog();  // -> cat
