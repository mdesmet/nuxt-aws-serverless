const path = require('path')
const express = require('express')
const app = express()
const { Nuxt } = require('nuxt')

app.use('/_nuxt', express.static(path.join(__dirname, '.nuxt', 'dist')))
const config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)

app.use(async (req, res) => {
  await nuxt.ready()
  nuxt.render(req, res)
})

module.exports = app
