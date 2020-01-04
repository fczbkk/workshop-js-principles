const userData = {
  firstName: 'Riki',
  lastName: 'Fridrich',
  role: 'editor'
}

const {role, ...userName} = userData

console.log(userName)
// { firstName: 'Riki', lastName: 'Fridrich' }
