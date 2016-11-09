var assert = require('assert');
var {add} = require('./../calculator');


assert.equal(add(1, 2), 3, 'add numbers');

assert.equal(add('1', '2'), 12, 'add strings');
assert.strictEqual(add('1', '2'), '12', 'add strings - strict');