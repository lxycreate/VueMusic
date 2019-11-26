/**
 * @Description: webpack配置
 * @Author: lixianying
 * @Date: 2019-11-26
 */
const path = require('path')

/**
 * 生成完整路径
 */
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port: 8888,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}