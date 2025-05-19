'use strict'

const dotenv = require('dotenv')
const app = require('./app')
const http = require('http')

dotenv.config()

const httpListenerPort = 8080

http.createServer(app).listen(httpListenerPort, () => {
  console.log('app is listening at local host: ' + httpListenerPort)
})
