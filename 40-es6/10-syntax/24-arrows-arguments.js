function classicFunction () {
  console.log(arguments)
}

const arrowFunction = () => {
  console.log(arguments)
}

const arrowFunctionArguments = (...args) => {
  console.log(args)
}

classicFunction('aaa', 'bbb', 'ccc')
// [Arguments] { '0': 'aaa', '1': 'bbb', '2': 'ccc' }

arrowFunction('aaa', 'bbb', 'ccc')
// ¯\_(ツ)_/¯

arrowFunctionArguments('aaa', 'bbb', 'ccc')
// [ 'aaa', 'bbb', 'ccc' ]
