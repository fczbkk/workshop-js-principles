var database = require('./../database');

function getData (id, callback) {
  var data = database[id];
  setTimeout(function () {
    callback(data.response)
  }, data.delay);
}


getData('one', console.log);
getData('two', console.log);
getData('three', console.log);
