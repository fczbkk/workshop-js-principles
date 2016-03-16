var database = require('./../database');

function getData (id, callback) {
  var data = database[id];
  setTimeout(function () {
    callback(data.error, data.response)
  }, data.delay);
}



function handleResponse (error, response) {
  if (error) {
    console.error('error:', error);
  } else {
    console.log('response:', response);
  }
}

getData('one', handleResponse);
getData('two', handleResponse);
getData('three', handleResponse);
getData('wrong', handleResponse);
