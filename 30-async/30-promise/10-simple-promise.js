var my_promise = new Promise(function (resolve, reject) {

  var delay = 3;

  if (typeof delay === 'number') {
    setTimeout(function () {
      resolve(delay);
    }, delay * 1000);
  } else {
    reject('Delay must be number.');
  }

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

