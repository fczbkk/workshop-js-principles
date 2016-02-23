var async = require('async');
var fs = require('fs');


var directories = [
  './../sample/first_subfolder/',
  './../sample/second_subfolder/'
];

async.concat(directories, fs.readdir, function (error, result) {
  console.log('done', error, result);
});


/*
var files_list = [];
fs.readdir('./../sample/first_subfolder/', function (error, result) {
  if (error) {
    throw new Error(error);
  } else {
    files_list = files_list.concat(result);
    fs.readdir('./../sample/second_subfolder/', function (error, result) {
      if (error) {
        throw new Error(error);
      } else {
        files_list = files_list.concat(result);
        console.log('done', files_list);
      }
    });
  }
});
*/