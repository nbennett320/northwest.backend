const express = require('express')
const createError = require('http-errors')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const indexRouter = require('./routes/index')
const clientTokenRouter = require('./routes/client_token')
const purchaseRouter = require('./routes/purchase')
const calculate = require('./routes/calculate')
const verify = require('./routes/verify')
const songs = require('./routes/songs')
const app = express()
const cors = require('cors')

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/client_token', clientTokenRouter)
app.use('/purchase', purchaseRouter)
//app.use('/purchase/:nonce', purchase)
app.use('/calculate', calculate)
app.use('/verify', verify)
app.use('/songs', songs)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' 
    ? err 
    : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app