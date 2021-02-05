import React, { useState, useEffect } from 'react'
import request from 'superagent'

function PotentialPicture () {
  const urlImg = 'https://images.dog.ceo//breeds//hound-basset//n02088238_11846.jpg'

  const [image, setImage] = useState('')
  useEffect(() => {
    request.get('/api/v1/dog')
      .then(resp => {
        setImage(resp.body)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div>
      <img src={image.url}></img>
    </div>
  )
}

export default PotentialPicture
