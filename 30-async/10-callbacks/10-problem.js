var database = require('./../database');

function getData (id) {
  var data = database[id];
  setTimeout(function () {
    return data.response;
  }, data.delay);
}


console.log(getData('one'));
console.log(getData('two'));
console.log(getData('three'));
