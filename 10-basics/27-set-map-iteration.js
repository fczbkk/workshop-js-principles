const myObject = {aaa: 'bbb'}
const myFunction = function () {}

const myMap = new Map([
  ['aaa', 'bbb'],
  [myObject, 'object value'],
  [myFunction, 'function value']
])

myMap.forEach((key, value, original) => {
  console.log('key', key)
  console.log('value', value)
  console.log('original', original)
})

for (let [key, value] of myMap.entries()) {
  console.log('map entry', key, value)
}



const mySet = new Set(['a', 'b', 'c'])

mySet.forEach(console.log)

for (let [key, value] of mySet.entries()) {
  console.log('set entry', key, value)
}
