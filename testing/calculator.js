function add (a, b) {
  return a + b;
}

function doComplicatedMath (input, callback) {
  setTimeout(function () {
    callback(input);
  }, 1000);
}

module.exports = {
  add: add,
  doComplicatedMath: doComplicatedMath
};