function getData (delay) {
  return new Promise(function (resolve, reject) {
    if (typeof delay === 'number') {
      setTimeout(function () {
        resolve(delay);
      }, delay * 1000);
    } else {
      reject('Delay must be number.');
    }
  });
}



function handleResult(result) {
  console.log('done', result);
}

function handleError(reason) {
  console.error('error', reason);
}


getData(3)
  .then(handleResult)
  .catch(handleError);

