const express = require('express')
const cors = require('cors')

const app = express()

app.get(`${process.env.BASE_PATH}/api/v1/hello`, (req, res) => {
  res.json({ message: 'Hello from Express!'})
})

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

module.exports = app
