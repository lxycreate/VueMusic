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
    },
    proxy: {
      '/api': {
        target: "http://192.168.200.33:8888/",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  // 配置别名
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  // 配置标题栏图标
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }
}