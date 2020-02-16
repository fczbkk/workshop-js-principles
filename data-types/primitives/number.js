console.log(typeof 123.456)
// 'number'

console.log(Number.POSITIVE_INFINITY)
console.log(Math.PI)

console.log(Number.MAX_SAFE_INTEGER)
// 9007199254740991

console.log(Number.MAX_SAFE_INTEGER === Number.MAX_SAFE_INTEGER + 100 - 100)
// false

console.log(0x100)
// 256
console.log(0o100)
// 64
console.log(0b100)
// 4

console.log(0.1 + 0.2)
// 0.30000000000000004
// see https://0.30000000000000004.com/

console.log(typeof NaN)
// 'number'
console.log(NaN === NaN)
// false
console.log('x' * 5 === 'y' * 10)
// false

console.log(Math.min())
// Infinity
