const express = require('express')
const app = express()

import config from './config'

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(config.port, function () {
  console.log('Example app listening on port 3000!')
})
