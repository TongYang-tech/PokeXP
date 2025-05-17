'use strict'

const dotenv = require('dotenv')
const app = require('./app')

dotenv.config()

const httpListenerPort = 8080

app.listen(httpListenerPort, () => {
  console.log('app is listening at local host: ' + httpListenerPort)
})
