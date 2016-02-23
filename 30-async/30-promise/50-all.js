function delayedResponse (seconds) {
  return new Promise(function (resolve, reject) {
    if (isNaN(seconds)) {
      reject('Not a number.');
      // setTimeout(reject, 2500, 'Not a number');
    } else {
      setTimeout(resolve, seconds * 1000, seconds);
    }
  });
}


var my_promises = [
  delayedResponse(1),
  delayedResponse(2),
  delayedResponse(3),
  delayedResponse(4),
  delayedResponse(5)
];

Promise
  .all(my_promises)
  .then(console.log)
  .catch(console.error);