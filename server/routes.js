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

router.get('/details', (req, res) => {
  const apiUrl = 'https://pipl.ir/v1/getPerson'

  request.get(apiUrl)
    .then(({ body }) => {
      const {
        person: {
          education,
          personal: {
            name, gender, age, country, city,
            last_name: lastName
          },
          work: {
            position
          }
        }
      } = body
      const personal = { name, lastName, gender, age, country, city }

      res.json({ education, personal, position })
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({
        route: '/details',
        error: 'internal server error'
      })
    })
})
