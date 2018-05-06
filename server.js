const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const webpackDevMiddleware = require('webpack-dev-middleware')
const compiler = webpack(webpackConfig)


app.use(express.static(__dirname + '/www'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
}))




app.get('/a', (req, res) => res.send('proxy worked'))

app.listen(3000, () => console.log('Listening on port 3000'))
