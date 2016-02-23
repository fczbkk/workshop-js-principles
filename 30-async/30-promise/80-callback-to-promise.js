function splitName (name, callback) {
  var chunks = name.split(' ');
  if (chunks.length > 1) {
    callback(null, chunks);
  } else {
    callback('Name is too short.');
  }
}


function splitNamePromise (name) {
  return new Promise(function (resolve, reject) {
    splitName(name, function (error, result) {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}


splitNamePromise('Riki Fridrich')
  .then(console.log)
  .catch(console.error);
