function aaa () {
  console.log(this);
}

aaa(); // window


function bbb () {
  "use strict";
  console.log(this);
}

bbb(); // undefined