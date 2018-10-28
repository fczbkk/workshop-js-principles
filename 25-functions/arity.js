function noParams () {
  console.log('This function expects no parameters.')
}

function singlePaaram (first) {
  console.log('This function expects one parameter.')
}

function multiParams (first, second, third) {
  console.log('This function expects three parameters.')
}

function variableParams (first, ...other) {
  console.log('This function expects variable number of parameters.')
}

console.log('no', noParams.length)
console.log('single', singlePaaram.length)
console.log('multi', multiParams.length)
console.log('variable', variableParams.length)



function square (n) {
  return n * n
}

const squares = [1, 2, 3].map(square)
console.log('squares', squares)

const numbers1 = ['1', '2', '3'].map(parseInt)
console.log('numbers1', numbers1)

const numbers2 = ['1', '2', '3'].map((n) => parseInt(n))
console.log('numbers2', numbers2)
