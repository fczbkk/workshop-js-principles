var fs = require('fs');

fs.readdir('./../sample/', function (error, items_list) {
  if (error) {
    throw new Error(error);
  } else {
    console.log('result', items_list);
  }
});
