




// variable hoisting

console.log(animal);  // -> undefined
var animal = "dog";
console.log(animal);  // -> dog

// ...is equivalent to...

var animal;
console.log(animal);  // -> undefined
animal = "dog";
console.log(animal);  // -> dog
