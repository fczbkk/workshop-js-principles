var async = require('async');


var firstTask = function (callback) {
  console.log('first task');
  callback(null, 'aaa');
};

var secondTask = function (arg, callback) {
  console.log('second task', arg);
  callback(null, arg, 'bbb');
};

var thirdTask = function (arg1, arg2, callback) {
  console.log('third task', arg1, arg2);
  callback(null, 'ccc');
};

var tasks = [firstTask, secondTask, thirdTask];


async.waterfall(tasks, function (error, result) {
  console.log('done', error, result);
});
