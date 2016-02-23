var async = require('async');
var showData = require('./../show-data');


function getRandomTask (callback) {
  var tasks = ['one', 'two', 'three', 'four', 'five'];
  var random_number = Math.floor(Math.random() * tasks.length);
  var random_task = tasks[random_number];
  console.log('starting', random_task);
  showData(random_task, callback);
}

async.forever(getRandomTask, function (error) {
  console.log('done', error);
});
