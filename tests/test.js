var omnislug = require('../index.js'),
  expect = require('chai').expect;

describe('Chinese (zh)', function() {
  it('hanzi only string', function(done) {
    expect(omnislug.toSlug('恭喜發財')).to.be.equal('gong-xi-fa-cai');
    done();
  });

  it('hanzi mixed with latin letters', function(done) {
    expect(omnislug.toSlug('大家3Q吧')).to.be.equal('da-jia-3Q-ba');
    done();
  });
});
