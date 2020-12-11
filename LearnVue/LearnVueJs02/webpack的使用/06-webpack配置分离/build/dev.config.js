const WebpackMerge = require('webpack-merge')
const BaseConfig = require('./base.config')

module.exports = WebpackMerge.merge(BaseConfig, {
  devServer: {
    contentBase: './dist',
    // inline : 是否实时监听
    inline: true,
    // 页面自动打开
    open: true
  }
})
