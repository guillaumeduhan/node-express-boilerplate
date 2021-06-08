const express = require('express')
const app = express()
const Hubspot = require('hubspot')

app.get('/', function (req, res) {
  res.send('403 Unauthorized.')
})

app.get('/createOrUpdate', function (req, res) {
  const hubspot = new Hubspot({
    apiKey: 'e68542ee-c8b4-4dd9-8825-b979777ff6d1',
    checkLimit: false
  })
  hubspot.contacts.createOrUpdate('gduhan@test.com', {
    "properties": [
      { "property": "firstname", "value": 'hello' }
    ]
  })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
})

app.listen(3000, function () {
  console.log('Gilbert Hubspot app running on 3000!')
})
