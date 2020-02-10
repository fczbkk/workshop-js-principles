const mySet = new Set(['a', 'b'])
mySet.add('c')

mySet.has('a') // true
mySet.has('x') // false

mySet.values()
mySet.keys()
mySet.entries()

mySet.delete('c')
mySet.clear()

const setWithDuplicates = new Set(['a', 'a', 'a'])
console.log(setWithDuplicates.values())
