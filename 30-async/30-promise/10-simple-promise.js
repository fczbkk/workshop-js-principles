var database = require('./../database');

var my_promise = new Promise(function (resolve, reject) {
  var data = database['three'];
  setTimeout(function () {
    if (data.error) {
      reject(data.error);
    } else {
      resolve(data.response);
    }
  }, data.delay);
});

function handleResult(result) {
  console.log('done', result);
}

function handleError(reason) {
  console.error('error', reason);
}


my_promise
  .then(handleResult)
  .catch(handleError);

