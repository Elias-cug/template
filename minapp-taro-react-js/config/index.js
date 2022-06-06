const config = {
  projectName: 'minapp-taro-react-js',
  date: '2022-6-6',
  // 设计稿尺寸
  designWidth: 750,
  // 设计稿尺寸换算规则
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  // 项目源码目录
  sourceRoot: 'src',
  // 项目产出目录
  outputRoot: 'dist',
  // taro 插件配置
  plugins: [],
  // 全局变量设置
  defineConstants: {
  },
  // TODO:  文件copy配置
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  // 框架
  framework: 'react',
  // 小程序端专用配置
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          // 设置 1px 是否需要被转化
          onePxTransform: true,
          // rem 允许的小数位数
          unitPrecision: 5,
          // 允许转换的顺序
          propList: ['*'],
          // 黑明单里的选择器将会被忽略
          selectorBlackList: [],
          // 直接替换而不是追加一条替换
          replace: true,
          // 允许媒体查询里的 px 单位转换
          mediaQuery: false,
          // 设置一个可悲转换的最小 px 值
          minPixelValue: 0
        }
      },
      // 小程序端样式引用本地资源内联配置
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    // 自定义 webpack 配置，默认参数 chain, webpack
    webpackChain() {}
  },
  // H5端专用配置
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
