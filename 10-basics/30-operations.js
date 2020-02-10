// numbers

console.log(1 + 1);
console.log(1 - 1);
console.log(2 * 2);
console.log(4 / 2);


// strings

console.log('a' + 'b');


// to number

console.log(5 * undefined);  // NaN
console.log(5 * {});         // NaN
console.log(5 * []);         // 0
console.log(5 * null);       // 0
console.log(5 * true);       // 5
console.log(5 * false);      // 0
console.log(5 * '1');        // Number


// to string

console.log('a' + undefined);  // 'undefined'
console.log('a' + null);       // 'null'
console.log('a' + true);       // 'true'
console.log('a' + false);      // 'false'
console.log('a' + 123);        // '123'
console.log('a' + {});         // '[object Object]'
console.log('a' + []);         // ''
console.log('a' + [1, 2, 3]);  // '1,2,3'


