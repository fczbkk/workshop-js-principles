function callbackWithDelay (delay, callback) {
  if (typeof delay === 'number') {
    setTimeout(function () {
      callback(null, delay);
    }, delay * 1000);
  } else {
    callback('Delay must be number.', delay);
  }
}


function handleResponse (error, response) {
  if (error) {
    console.error('error:', error);
  } else {
    console.log('success:', response);
  }
}


callbackWithDelay(1, handleResponse);
callbackWithDelay('xxx', handleResponse);
