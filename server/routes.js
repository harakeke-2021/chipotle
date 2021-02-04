const express = require('express')

const router = express.Router()
const request = require('superagent')

module.exports = router

router.get('/', (req, res) => {

})

router.post('/', (req, res) => {

})

router.get('/dog', (req, res) => {
  const getReq = 'https://dog.ceo/api/breeds/image/random'

  request.get(getReq)
    .then((apiRes) => {
      const { message } = apiRes.body
      console.log(message)
      res.json({ message })
    })
})
