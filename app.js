const Koa = require('koa')
const koa = require('koa-router')()
const json = require('koa-json')
const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')()

const app = new Koa()
app.use(bodyparser)
app.use(json())
app.use(logger())

app.use(function*(next) {
  let start = new Date()
  yield next
  let ms = new Date() - start
  console.log(ms)
})

app.on('error', function(err, ctx) {
  console.log('server error', err)
})

app.listen(8889, () => {
  console.log('koa is listening in 8889')
})

module.exports = app
