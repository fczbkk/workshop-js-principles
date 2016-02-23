





// timeouts and intervals are executed in global scope

var animal = "dog";

var animalObject = {
  animal: "cat",
  showAnimal: function () {
    setTimeout(function () {console.log(this.animal);}, 1000);
  }
}

animalObject.showAnimal();  // -> dog
