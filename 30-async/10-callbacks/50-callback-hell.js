var fs = require('fs');
var p = require('path')

var path = p.resolve(__dirname, '../sample/');

// read all items in directory
fs.readdir(path, function (error, items_list) {
  if (error) {
    throw new Error(error);
  } else {

    // go through each item and check if it is file
    items_list.forEach(function (item) {
      var item_path = p.resolve(path, item);

      fs.stat(item_path, function (error, item_stats) {
        if (error) {
          throw new Error(error);
        } else {

          // get content of the file
          if (item_stats.isFile()) {
            fs.readFile(item_path, function (error, content) {
              if (error) {
                throw new Error(error);
              } else {
                console.log(item, content.toString());
              }
            });
          }

        }
      });

    });

  }
});
