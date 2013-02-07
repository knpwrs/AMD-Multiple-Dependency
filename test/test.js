/*jshint expr:true*/
/*global describe:true it:true before:true chai:true require:true console:true*/
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

  it('should load multiple dependencies with relative paths', function (done) {
    require.config({
      baseUrl: '/test/foo/bar'
    });
    require(['../../../md!../../a;../../b;../../c'], function (md) {
      expect(md).to.be.array;
      expect(md[0]).to.equal('a');
      expect(md[1]).to.equal('b');
      expect(md[2]).to.equal('c');
      require.config({
        baseUrl: '/test'
      });
      done();
    });
  });

  it('should load multiple dependencies with aliases', function (done) {
    require(['../md!a:x;b:y;c:z'], function (md) {
      console.log(md);
      expect(md).to.be.array;
      expect(md[0]).to.equal(md.x);
      expect(md.x).to.equal('a');
      expect(md[1]).to.equal(md.y);
      expect(md.y).to.equal('b');
      expect(md[2]).to.equal(md.z);
      expect(md.z).to.equal('c');
      done();
    });
  });
});
