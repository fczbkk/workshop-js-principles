var database = require('./database');

module.exports = function (id, callback) {
  var data = database[id];
  setTimeout(function () {
    callback(data.error, data.response)
  }, data.delay);
};