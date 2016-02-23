var async = require('async');
var showData = require('./../show-data');


var firstTask = function (callback) {showData('one', callback);};
var secondTask = function (callback) {showData('two', callback);};
var thirdTask = function (callback) {showData('three', callback);};
var fourthTask = function (callback) {showData('four', callback);};
var fifthTask = function (callback) {showData('five', callback);};


var tasks = {
  aaa: firstTask,
  bbb: secondTask,
  ccc: thirdTask,
  ddd: fourthTask,
  eee: fifthTask
};

/*
var tasks = {
  aaa: ['bbb', firstTask],
  bbb: secondTask,
  ccc: ['aaa', 'ddd', thirdTask],
  ddd: fourthTask,
  eee: ['ddd', 'aaa', 'bbb', fifthTask]
};
*/

async.auto(tasks, function (error, result) {
  console.log('done', error, result);
});