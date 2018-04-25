console.log('123' === 123);
console.log(Number('123') === 123);

console.log(123 === '123');
console.log(String(123) === '123');

console.log('aaa' === true);
console.log(Boolean('aaa') === true);

var dirty_array = [true, false, 123, 0, 'aaa', '', null, undefined];
var truthy_array = dirty_array.filter(Boolean);
console.log(truthy_array);