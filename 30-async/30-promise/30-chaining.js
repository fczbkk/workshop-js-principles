function splitName (name) {
  return new Promise(function (resolve, reject) {
    resolve(name.split(' '));
  });
}

function reverseName (name) {
  return new Promise(function (resolve, reject) {
    resolve(name.reverse());
  });
}

function joinName (name) {
  return new Promise(function (resolve, reject) {
    resolve(name.join(', '));
  });
}


splitName('Riki Fridrich')
  .then(reverseName)
  .then(joinName)
  .then(console.log);