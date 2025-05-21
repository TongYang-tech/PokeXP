const express = require('express')
const typesRouter = require('./types')

const v1Router = express.Router()

v1Router.use('/v1', typesRouter)

module.exports = v1Router
