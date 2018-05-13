var omnislug = require('../index.js'),
      expect = require('chai').expect;

describe('Chinese (zh)', function() {
  it('hanzi only string', function(done) {
    expect(omnislug.toSlug("恭喜發財")).to.be.equal("gong-xi-fa-cai");
    done();
  });
});
