require("babel-polyfill");


function splitName (name) {
  return new Promise(function (resolve, reject) {
    resolve(name.split(' '));
  });
}


async function handleName (name) {
  var result = await splitName(name);
  return result;
}

function displayResult (result) {
  console.log(result);
}

handleName('Riki Fridrich')
  .then(displayResult);