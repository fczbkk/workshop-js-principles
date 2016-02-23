require("babel-polyfill");


function delayedResponse (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000, seconds);
  });
}

async function handleRequests () {
  var slow = await delayedResponse(5);
  var medium = await delayedResponse(3);
  var fast = await delayedResponse(1);
  console.log(slow, medium, fast);
}

handleRequests();