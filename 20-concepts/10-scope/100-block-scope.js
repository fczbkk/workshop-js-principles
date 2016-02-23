




// brackets do not create a function scope

var animal = "dog";
{
  var animal = "cat";
}

console.log(animal);  // -> cat
