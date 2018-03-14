function callbackWithDelay (delay, callback) {
  setTimeout(function () {
    callback(delay);
  }, delay * 1000);
}


callbackWithDelay(1, console.log);
callbackWithDelay(2, console.log);
callbackWithDelay(3, console.log);
