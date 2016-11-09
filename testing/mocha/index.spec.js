var assert = require('assert');
var {add, doComplicatedMath} = require('./../calculator');


describe('Calculator', function () {

  describe('add method', function () {

    it('should add two numbers', function () {
      assert.equal(add(1, 2), 3);
    });

    it('should add strings', function () {
      assert.equal(add('1', '2'), 12);
    });

    it('should return string when adding strings', function () {
      assert.strictEqual(add('1', '2'), '12');
    });

  });


  describe('async tests', function () {

    it('should do some complicated math', function (done) {
      doComplicatedMath(1, function (result) {
        assert.equal(result, 1);
        done();
      });
    });

  });


  describe('hooks', function () {

    before(function () {
      global.value1 = 1;
    });

    beforeEach(function () {
      global.value2 = 1;
    });

    after(function () {
      delete global.value1;
      delete global.value2;
    });

    it('should define variable during `before`...', function () {
      assert.equal(global.value1, 1);
      global.value1 = 2;
    });

    it('...and then it should not redefine it', function () {
      assert.notEqual(global.value1, 1);
    });

    it('should define variable during `beforeEach`...', function () {
      assert.equal(global.value2, 1);
      global.value2 = 2;
    });

    it('...and then redefine it each time', function () {
      assert.equal(global.value2, 1);
    });

  });


  /*
  describe('test controls', function () {

    it('should be defined in the future, but not yet');

    it.skip('should be skipped', function () {
      assert.throws(function () {
        add({}, {});
      })
    });

    it.only('should be run exclisively', function () {
      assert.equal(add(2, 2), 4);
    });

  });
  */

});




