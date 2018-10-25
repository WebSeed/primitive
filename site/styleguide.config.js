const webpackConfig = require('./webpack.config')

module.exports = {
  title: 'Primitive',
  components: '../src/components/**/[A-Z]*.jsx',
  webpackConfig,
}
