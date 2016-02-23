function splitName (name) {
  return new Promise(function (resolve, reject) {
    var chunks = name.split(' ');
    if (chunks.length > 1) {
      resolve(chunks);
    } else {
      reject('Name is too short.');
    }
  });
}

function reverseName (chunks) {
  return new Promise(function (resolve, reject) {
    if (chunks.length > 2) {
      reject('Name is too long.');
    } else {
      resolve(chunks.reverse());
    }
  });
}

function joinName (chunks) {
  return new Promise(function (resolve, reject) {
    resolve(chunks.join(', '));
  });
}


splitName('Riki Fridrich')
  .then(reverseName)
  .then(joinName)
  .then(console.log)
  .catch(console.error);