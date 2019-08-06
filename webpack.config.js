const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = env => ({
  // webpack4中 entry和output可以没有
  entry: './src/index.js',
  output: {
    filename: '[name].[chunkhash].js', // 打包出来的文件最好用文件的hash值来命名 防止更新后浏览器有缓存
    chunkFilename: '[name]-[chunkhash:8].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'electron-renderer',
  devServer: {
    contentBase: './dist',
  },
  devtool: 'source-map', // 配置webpack自动生成source-map文件,方便浏览器调试bug,不过加上后拖慢打包速度
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: env && env.WITH_ESLINT ? [{
          loader: 'HappyPack/loader?id=jsHappy', // 使用happypack 加快打包速度
        }, {
          loader: 'eslint-loader',
          options: { fix: true },
        }] : [
          {
            loader: 'HappyPack/loader?id=jsHappy',
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: [
          'style-loader', // style-loader能够在需要载入的html中创建一个<style></style>标签，标签里的内容就是CSS内容。
          {
            loader: 'css-loader', // css-loader是允许在js中import一个css文件，会将css文件当成一个模块引入到js文件中。
            options: {
              modules: true, // 启用 css-modules模式 简单来说在样式表文件中可以使用:local(.className)、：global（.className）的方式来标明该样式的作用域
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: [/node_modules/], // 只对自己编辑的文件开启modules
        use: [{
          loader: MiniCssExtractPlugin.loader, // 替代 style-loader 将 css从文件中抽出成一个单独的文件
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            context: __dirname,   // 不同目录下相同名称的less文件生成不同的css类名
          },
        }, {
          loader: 'less-loader',
        }],
      },
      {
        test: /\.less$/,
        include: [/node_modules|antd/], // 单独为antd写的lessloader 因为antd不支持css-loader开启modules模式
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true, // 主要为了解决antd使用less打包样式less报错的问题
          },
        }],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader', // 将不超过limit限制的大小的图片转成base64的方式引用减少浏览器请求,超出限制大小的使用file-loader
            options: {
              name: './image/img-[hash:8].[ext]',
              limit: 256,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    // 编译输出文件前，删除旧文件，当利用文件hash值输出时，可以利用该插件删除原有文件
    new CleanWebpackPlugin(['dist']),
    // 重构入口html，动态添加<link>和<script>，在以hash命名的文件上非常有用，因为每次编译都会改变<link>和<script>标签文件名字
    new HtmlWebPackPlugin({
      template: './index.html',
    }),
    new HappyPack({
      id: 'jsHappy',
      verbose: false,
      threadPool: happyThreadPool,
      loaders: [{
        path: 'babel-loader', // 使用babel将es6转换成es5
        query: {
          cacheDirectory: './node_modules/.webpack_cache',
        },
      }],
    }),
  ],
  externals: {
    jquery: 'jQuery', // 当由页面自主引用jQuery时（通常为了cdn加速）可以在js文件中用const $ = import('jQuery')来代替 const $ = window.jQuery
  },
});
