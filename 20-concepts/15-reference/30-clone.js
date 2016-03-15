function clone (input_object) {
  var cloned_object = {};
  for (var key in input_object) {
    cloned_object[key] = input_object[key];
  }
  return cloned_object;
}


var aaa = {bbb: 'ccc'};
console.log('aaa', aaa);

var ccc = clone(aaa);
console.log('ccc', ccc);

aaa.bbb = 'xxx';
console.log('aaa', aaa);
console.log('ccc', ccc);
