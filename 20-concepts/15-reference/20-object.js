var aaa = {bbb: 'ccc'};
console.log('aaa', aaa);

var ccc = aaa;
console.log('ccc', ccc);

aaa.bbb = 'xxx';
console.log('aaa', aaa);
console.log('ccc', ccc);
