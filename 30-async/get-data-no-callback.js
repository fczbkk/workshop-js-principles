var database = require('./database');

module.exports = function (id, callback) {
  var data = database[id];
  setTimeout(function () {
    return data.response;
  }, data.delay);
};