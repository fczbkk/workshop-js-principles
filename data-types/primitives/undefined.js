console.log(typeof nonExistingVariable)
// 'undefined', because variable is not created

var myVariable
console.log(typeof myVariable)
// 'undefined', because variable is created but no value is assigned

function showType (myParameter) {
  console.log(typeof myParameter)
}
showType()
// 'undefined', because no value is used as parameter
