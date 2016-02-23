var async = require('async');
var getData = require('./../get-data');


var items = ['five', 'two', 'four'];
// var items = ['one', 'two', 'three', 'four', 'five', 'wrong'];

async.sortBy(items, getData, function (error, result) {
  console.log('done', error, result);
});
