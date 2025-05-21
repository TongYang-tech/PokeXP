const axios = require('axios')
const express = require('express')

const typesRouter = express.Router()

typesRouter.get('/types', async (req, res) => {
  const types = await axios.request({
    url: 'https://api.pokemontcg.io/v2/types',
    method: 'GET',
    headers: {
      apikey: process.env.POKEMON_TCG_API_KEY
    }
  })
  const data = types.data.data
  res.status(200).json(data)
})

module.exports = typesRouter
