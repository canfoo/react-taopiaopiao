const express = require('express')
const debug = require('debug')('app:server')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('../build/webpack.config')
const config = require('../config')
const proxy = require("express-http-proxy")
const proxyTable = config.proxyTable
const proxyPaths = Object.keys(proxyTable)

const app = express()
const paths = config.utils_paths

function setProxyServer(path, host) {
  var apiProxy = proxy(host, {
    forwardPath:function(req,res){
      return req._parsedUrl.path
    }
  })
  app.use(path, apiProxy)
  debug('Proxy created: ' + path + ' -> ' + host)
}
proxyPaths.forEach((item) => {
  setProxyServer(item, proxyTable[item])
})

if (config.env === 'development') {
  const compiler = webpack(webpackConfig)

  debug('Enable webpack dev and HMR middleware')
  app.use(require('webpack-dev-middleware')(compiler, {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    publicPath  : webpackConfig.output.publicPath,
    contentBase : paths.client(),
    hot         : true,
    quiet       : config.compiler_quiet,
    noInfo      : config.compiler_quiet,
    lazy        : false,
    stats       : config.compiler_stats
  }))
  app.use(require('webpack-hot-middleware')(compiler))

  app.use(express.static(paths.client('static')))

  app.use('*', function (req, res, next) {
    const filename = path.join(compiler.outputPath, 'index.html')
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    })
  })
} else {
  debug(
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  )

  app.use(express.static(paths.dist()))
}
console.log('global')
module.exports = app
