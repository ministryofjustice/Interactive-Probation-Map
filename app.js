const express = require('express')
const path = require('path')
const logger = require('morgan')
const sassMiddleware = require('node-sass-middleware')
const nunjucks = require('nunjucks')
const helmet = require('helmet')

const indexRouter = require('./routes/index')

const app = express()

nunjucks.configure(
  [
    'views',
    'node_modules/govuk-frontend/',
    'node_modules/govuk-frontend/components/'
  ], {
    autoescape: true,
    express: app
  })

app.set('view engine', 'html')
app.use(logger('dev'))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  debug: false,
  outputStyle: 'compressed',
  indentedSyntax: true,
  sourceMap: true
}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, '/node_modules/govuk-frontend/assets')))
app.use('/govuk-frontend', express.static(path.join(__dirname, '/node_modules/govuk-frontend')))

app.use('/', indexRouter)

module.exports = app
