var fs = require('fs');
const path = require('path')

fs.readdir(path.resolve(__dirname, '../sample/'), function (error, items_list) {
  if (error) {
    throw new Error(error);
  } else {
    console.log('result', items_list);
  }
});
