import React, { useState, useEffect } from 'react'
import request from 'superagent'

function PotentialPicture () {
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
    <>
      <img src={image} className='dog-img'></img>
    </>
  )
}

export default PotentialPicture
