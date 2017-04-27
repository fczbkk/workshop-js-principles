import {sanitizeName} from './../src/utilities';

describe('Utilities', function () {

  describe('sanitizeName', function () {

    it('should capitalize name', function () {
      expect(sanitizeName('riki')).toEqual('Riki');
    });

  });

});