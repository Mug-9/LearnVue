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
        'components': resolve('./src/components'),
        'commons': resolve('./src/components/commons'),
        'content': resolve('./src/components/content'),
        'views': resolve('./src/views'),
        'network': resolve('./src/network'),

      }
    },
  }
}
