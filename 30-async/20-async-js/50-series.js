var async = require('async');
var showData = require('./../show-data');


function slowTask (callback) {
  showData('five', callback);
}

function fastTask (callback) {
  showData('one', callback);
}

async.series([slowTask, fastTask], function (error, result) {
  console.log('done', error, result);
});


/*
var tasks = {
  slow: slowTask,
  fast: fastTask
};

async.series(tasks, function (error, result) {
  console.log('done', error, result);
});
*/