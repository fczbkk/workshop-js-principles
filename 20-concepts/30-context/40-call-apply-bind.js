function sum (c, d) {
  console.log(this.a + this.b + c + d);
}

var my_object = {
  a: 1,
  b: 2
};


sum.call(my_object, 3, 4);
sum.apply(my_object, [3, 4]);


var new_sum = sum.bind(my_object);
new_sum(3, 4);