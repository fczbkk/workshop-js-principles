var async = require('async');
var showData = require('./../show-data');


var my_queue = async.queue(showData, 2);

my_queue.push('one');

/*
my_queue.push('two');
my_queue.push('three');

setTimeout(function () {
  my_queue.push('one');
  my_queue.push('two');
}, 5000);

my_queue.drain = function () {
  console.log('done');
};
*/
