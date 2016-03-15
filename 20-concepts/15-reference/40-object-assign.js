var aaa = {
  xxx: 'xxx'
};

var bbb = {
  xxx: 'yyy',
  zzz: 'zzz'
};

Object.assign(aaa, bbb);
console.log('aaa', aaa);

var ccc = Object.assign({}, aaa);
console.log('ccc', ccc);

aaa.xxx = 'zzz';
console.log('aaa', aaa);
console.log('ccc', ccc);
