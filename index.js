var postcss = require('postcss');

module.exports = postcss.plugin('mahogany', function () {
  return function (css) {
    css.walkDecls(function (decl) {
      decl.important = true;
    });
  };
});
