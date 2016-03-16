var database = require('./database');

module.exports = function (id, callback) {
  var data = database[id];
  console.log('START', id);
  setTimeout(function () {
    console.log('END', id);
    callback(data.error, data.response);
  }, data.delay);
};