const firstName = 'Riki'
const lastName = 'Fridrich'

const name1 = firstName + ' ' + lastName
const name2 = [firstName, lastName].join(' ')

console.log(name1 === name2)
// true


const person1 = {firstName: firstName, lastName: lastName}
const person2 = {firstName: person1.firstName, lastName: person1.lastName}

console.log(person1 === person2)
// false
