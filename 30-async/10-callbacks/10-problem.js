function returnWithDelay (delay) {
  setTimeout(function () {
    return delay;
  }, delay * 1000);
}


console.log(returnWithDelay(1));
console.log(returnWithDelay(2));
console.log(returnWithDelay(3));
