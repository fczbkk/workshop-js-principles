var async = require('async');
var showData = require('./../show-data');


var items = ['five', 'two', 'four'];
// var items = ['one', 'two', 'three', 'four', 'five', 'wrong'];

async.each(items, showData, function (error) {
  console.log('done', error);
});

/*
async.eachSeries(items, showData, function (error) {
  console.log('done', error);
});
*/


/*
async.eachLimit(items, 2, showData, function (error) {
  console.log('done', error);Í
});
 */
