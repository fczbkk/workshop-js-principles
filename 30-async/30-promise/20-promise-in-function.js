var database = require('./../database');


function getData (id) {
  var data = database[id];

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (data.error) {
        reject(data.error);
      } else {
        resolve(data.response);
      }
    }, data.delay);
  });

}



function handleResult(result) {
  console.log('done', result);
}

function handleError(reason) {
  console.error('error', reason);
}


getData('three')
  .then(handleResult)
  .catch(handleError);

