/*eslint-disable*/
const webpack = require('webpack')
const cssnano = require('cssnano')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('../config')
const debug = require('debug')('app:webpack:config')

const paths = config.utils_paths
const __DEV__ = config.globals.__DEV__
const __PROD__ = config.globals.__PROD__
const __TEST__ = config.globals.__TEST__

debug('Creating configuration.')


const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: config.compiler_devtool,
  resolve: {
    extensions: ['.web.js', '.js', '.jsx', '.json']
  },
  module: {}
}


const APP_ENTRY = paths.client('main.js')

console.log('APP_ENTRYAPP_ENTRYAPP_ENTRYAPP_ENTRYAPP_ENTRY', APP_ENTRY);

webpackConfig.entry = {
  app: __DEV__
  ? ['react-hot-loader/patch', 'whatwg-fetch', 'webpack-hot-middleware/client',  APP_ENTRY]
    : ['whatwg-fetch', APP_ENTRY],
  vendor: config.compiler_vendors
}

webpackConfig.output = {
  filename: `js/[name].[${config.compiler_hash_type}].js`,
  chunkFilename: 'js/[name].[chunkhash].js',
  path: paths.dist(),
  publicPath: config.compiler_public_path
}

var viewName = 'index.html'
if (__PROD__) {
  viewName = '../views/index.html'
}

webpackConfig.plugins = [
  new webpack.DefinePlugin(config.globals),   // 将config.globals变量定义在开发代码中
  new HtmlWebpackPlugin({
    template: paths.client('index.html'),
    hash: false,
    favicon: paths.client('static/favicon.ico'),
    filename: viewName,
    inject: 'body',
    minify: {
      collapseWhitespace: true
    }
  })
]

if (__DEV__) {
  debug('Enable plugins for live development (HMR, NoErrors).')
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else if (__PROD__) {
  debug('Enable plugins for production (OccurenceOrder, Dedupe & UglifyJS).')
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  )
}

webpackConfig.module.rules = [{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [{
        loader: 'react-hot-loader/webpack'
    },{
      loader: 'babel-loader',
      query: config.compiler_babel
    }]
  }, {
    test: /\.json$/,
    use: [{
      loader: 'json'
    }]
  }, {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
  }, {
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader']
  }, {
    test: /\.(gif|jpe?g|png|svg)$/i,
    use: [{
      loader: 'url-loader',
      query: {
          limit: 10000
      }
    }]
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    use: [{
      loader: 'url-loader',
      query: {
          limit: 20000
      }
    }]
  }
]

if (!__DEV__) {
  debug('Apply ExtractTextPlugin to CSS loaders.')
  webpackConfig.module.rules.filter((loader) =>
    loader.loaders && loader.loaders.find((name) => /css/.test(name.split('?')[0]))
  ).forEach((loader) => {
    const first = loader.loaders[0]
    const rest = loader.loaders.slice(1)
    loader.loader = ExtractTextPlugin.extract(first, rest.join('!'))
    delete loader.loaders
  })

  webpackConfig.plugins.push(
    new ExtractTextPlugin('css/[contenthash].css', {
      allChunks: true
    })
  )
}

module.exports = webpackConfig
