var async = require('async');
var showData = require('./../show-data');


function slowTask (callback) {
  showData('five', callback);
}

function mediumTask (callback) {
  showData('three', callback);
}

function fastTask (callback) {
  showData('one', callback);
}

async.parallel([slowTask, fastTask, mediumTask], function (error, result) {
  console.log('done', error, result);
});


/*
async.parallelLimit([slowTask, fastTask, mediumTask], 2, function (error, result) {
  console.log('done', error, result);
});
*/
