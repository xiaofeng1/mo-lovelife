// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path'),
    fs = require('fs'),
    env = process.env.NODE_ENV || 'development';

var dev = require('./dev.js');

//获取环境对应配置 .env.js
var envopt = path.resolve(__dirname, './' + env + '.env');
if (!fs.existsSync(envopt + '.js')) {
  envopt = path.resolve(__dirname, './dev.env');
};

module.exports = {
  build: {
    entry: {
      index: './src/main.js',
    },
    html: [
      {
        filename: 'lovelife.html', //模板输出名称
        entrys: ['index'], //页面需要引用的入口文件
        title: '测试', //html中的title
        tmplPath: './index.ejs' //模板路径，以src为起始路径
      },
    ],
    htmlOutputPath: '../tpl/', //模板输出路径
    // assetsRoot: path.resolve(__dirname, '../dist/static'), //静态资源输出根路径
    assetsRoot: path.resolve(__dirname, '../../../public/assets_vue'), //静态资源输出根路径
    assetsSubDirectory: '',
    publicPath: '../assets_vue/', //和正常的PublicPath相同
    assetsPublicPath: '../', //css内部图片等资源的公有路径
    productionSourceMap: false,
    envopt: envopt,
    env: require(envopt),
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: dev
}
