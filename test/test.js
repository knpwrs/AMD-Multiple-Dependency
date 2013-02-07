describe('md tests', function () {
  var expect;

  before(function () {
    expect = chai.expect;
    require.config({
      baseUrl: '/test'
    });
  });

  it('should load multiple dependencies', function (done) {
    require(['../md!a;b;c'], function (md) {
      expect(md).to.be.array;
      expect(md[0]).to.equal('a');
      expect(md[1]).to.equal('b');
      expect(md[2]).to.equal('c');
      done();
    });
  });
});
