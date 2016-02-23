var getData = require('./../get-data');


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
