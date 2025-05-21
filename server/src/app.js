const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

const build = 'client/build'
const buildPath = path.join(__dirname, `../../${build}`)
const assetsPath = path.join(__dirname, `../../${build}/assets`)

app.use(`${process.env.BASE_PATH}/api`, require('./routes'))
app.use(`${process.env.BASE_PATH}/assets`, express.static(assetsPath, { index: false }))

app.get('*name', (req, res) => {
  res.sendFile('index.html', {
    root: buildPath
  })
})

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

module.exports = app
