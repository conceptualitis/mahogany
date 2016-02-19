var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, done) {
  postcss([ plugin() ]).process(input).then(function (result) {
    expect(result.css).to.eql(output);
      done();
  });
};

describe('mahogany', function () {
  it('much transform, very important', function (done) {
    test('a { color: red; font-size: 12px; } b { font-weight: 400; }',
          'a { color: red !important; font-size: 12px !important; } b { font-weight: 400 !important; }', done);
  });

  it('much transform, too much important', function (done) {
    test('a { color: red !important; } b { font-weight: 400; }',
         'a { color: red !important; } b { font-weight: 400 !important; }', done);
  });
});
