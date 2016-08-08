// 启用 tb fis3 预设配置。
fis.require('tb-build')(fis, {
  // 选填，默认 react
  modName: 'demo',

  // 必填
  subModName: 'test',

  // 必填
  // 开发机地址
  host: '127.0.0.1',
    
  // 端口号
  staticPort: 8090,
  
  // 是否使用 npm 生态
  useNpm: true,

  // 打包相关，只有 preview 和 production 模式有效。
  // dev 和  qa 模式无效。
  // `fis3 release preview` 可看到效果。
  pack: {
    'pkg/aio.js': [
      '/client/index.jsx',
      '/client/index.jsx:deps'
    ],

    'pkg/components.css': [
      '/components/**.css:deps'
    ],
    
    'pkg/aio.css': [
     '/client/**.scss:deps'
    ]
  },
  
  // 可选： gbk 、utf8
  // 当设置为 gbk 时，只有在沙河环境和线上环境才替换，本地开发保留 utf8
  charset: 'utf8',

  // 可填写，配合页面中的tpl data
  // var data = __tplData('username');
  // 在 本地开发模式下，因为没有 php 环境，直接用这里面配置的数据。
  // 沙盒和线上会切换成 php 语句。
  tplMockData: {}
})

// 自定义配置部分

// 支持script src引入入口文件
fis.match('/client/index.jsx', {
  isMod: false
})