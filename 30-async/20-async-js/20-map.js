var async = require('async');

var database = require('./../database');

function getData (id, callback) {
  var data = database[id];
  setTimeout(function () {
    callback(data.error, data.response)
  }, data.delay);
}


var items = ['five', 'two', 'four'];
// var items = ['one', 'two', 'three', 'four', 'five', 'wrong'];

async.map(items, getData, function (error, result) {
  console.log('done', error, result);
});
