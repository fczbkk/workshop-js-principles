var fs = require('fs');
var p = require('path')

var path = p.resolve(__dirname, '../sample/');


function handleItemsList (error, items_list) {
  if (error) {
    throw new Error(error);
  } else {
    items_list.forEach(handleItem);
  }
}


function handleItem (item) {
  var item_path = p.resolve(path, item)
  fs.stat(item_path, function (error, item_stats) {
    checkItemStats(error, item_stats, item_path);
  });
}


function checkItemStats (error, item_stats, item_path) {
  if (error) {
    throw new Error(error);
  } else {
    if (item_stats.isFile()) {
      fs.readFile(item_path, displayFileContent);
    }
  }
}


function displayFileContent (error, content) {
  if (error) {
    throw new Error(error);
  } else {
    console.log(content.toString());
  }
}



fs.readdir(path, handleItemsList);
