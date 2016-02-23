





// let - defines variable within block scope

{
  let animal = "cat";
}

console.log(typeof animal);  // undefined

for (let i = 1; i < 10; i++) {
  void(0);
}

console.log(typeof i);  // undefined
