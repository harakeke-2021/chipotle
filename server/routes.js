const express = require('express')

const router = express.Router()
const request = require('superagent')

module.exports = router

router.get('/', (req, res) => {

})

router.post('/', (req, res) => {

})

router.get('/dog', (req, res) => {
  const apiUrl = 'https://dog.ceo/api/breeds/image/random'

  request.get(apiUrl)
    .then(({ body }) => {
      const { message: url } = body
      res.json({ url })
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({
        route: '/dog',
        error: 'internal server error'
      })
    })
})
