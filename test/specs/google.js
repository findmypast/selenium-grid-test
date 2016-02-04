
var chai = require('chai');
var expect = chai.expect;
var webdriverio = require('webdriverio');
var browser;

describe('my feature', function() {
  this.timeout(300000);
  before(function(done) {
    browser = webdriverio.remote(options);
    browser.init(done);
  });

  after(function(done) {
    browser.end(done);
  });

  it('will do something', function* () {
    yield browser.url('http://google.com');
    var title = yield browser.getTitle()
    console.log(title);
  });
});
