const config = {
    // 基本路径
    // publicPath: process.env.NODE_ENV === 'production' ? '/fe/' : '/',
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    assetsDir: 'static',
    lintOnSave: true,
    // webpack-dev-server 相关配置
    devServer: {
      // open: true,
      host: process.env.VUE_APP_HOST,
      port: process.env.VUE_APP_PORT
    },
    pages: {
      index: {
        entry: 'src/main.js',
        template: 'public/index.html',
        filename: 'index.html',
        title: process.env.VUE_APP_NAME_CN
      }
    }
  }
  
  module.exports = config
  