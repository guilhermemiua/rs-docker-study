const express = require('express')
const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.get('/', function (req, res) {
  res.send('Hello world!')
})

app.listen(PORT, HOST)