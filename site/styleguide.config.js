const path = require('path')
const webpackConfig = require('./webpack.config')

module.exports = {
  title: 'Primitive',
  components: '../src/components/**/[A-Z]*.jsx',
  styleguideComponents: {
    Wrapper: path.join(__dirname, './components/Wrapper'),
  },
  webpackConfig,
}
