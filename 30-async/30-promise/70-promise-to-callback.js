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

function splitNameCallback (name, callback) {
  splitName(name)
    .then(function (result) {
      callback(null, result);
    })
    .catch(function (reason) {
      callback(reason);
    });
}


splitNameCallback('Riki Fridrich', function (error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});
