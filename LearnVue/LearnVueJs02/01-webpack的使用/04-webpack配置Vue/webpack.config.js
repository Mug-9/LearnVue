const path = require('path')

module.exports = {
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // img会找到编译后存储在dist中的图片
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责加载，不负责解析
        // style-loader负责将样式添加到DOM
        use: ['style-loader', 'css-loader']
      }, {
        // test 目标文件
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载图片小于limit会将图片编译成base64
              // 当大于limit时，会使用file-loader
              limit: 13000,
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}
