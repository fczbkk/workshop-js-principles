var original_object = {first: 'Riki', last: 'Fridrich'};
var cloned_object = Object.assign({}, original_object);

var original_array = ['Riki', 'Fridrich'];
var cloned_array1 = [].concat[original_array];  // ES5
var cloned_array2 = [...original_array];  // ES6