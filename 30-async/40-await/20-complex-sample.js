function splitName (name) {
  return new Promise(function (resolve, reject) {
    resolve(name.split(' '));
  });
}

function joinName (name) {
  return new Promise(function (resolve, reject) {
    resolve(name.join(', '));
  });
}


async function handleName (name) {
  var split_name = await splitName(name);
  var reversed_name = split_name.reverse();
  var joined_name = await joinName(reversed_name);
  return joined_name;
}

function displayResult (result) {
  console.log('done', result);
}

handleName('Riki Fridrich')
  .then(displayResult);
