const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'assets': resolve('./src/assets'),
        'commons': resolve('./src/commons'),
        'components': resolve('./src/components'),
        'common': resolve('./src/components/common'),
        'content': resolve('./src/components/content'),
        'views': resolve('./src/views'),
        'network': resolve('./src/network'),

      }
    },
  }
}
