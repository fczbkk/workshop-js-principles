const myObject = {aaa: 'bbb'}
const myFunction = function () {}

const myMap = new Map()

myMap.set('my key', 'my value')
myMap.set(myObject, 'object value')
myMap.set(myFunction, 'function value')

myMap.delete(myObject)
myMap.clear()

