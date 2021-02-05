import React, { useState, useEffect } from 'react'
import request from 'superagent'

function PotentialPicture() {
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
    <div className='container'>
      <div className='photo-panel'>
        <img src={image.url} className='dog-img'></img>
        <div className='btn-panel'>
          <button className='glow-on-hover'>No</button>
          <button className='glow-on-hover'>Yes</button>
        </div>
      </div>
    </div>
  )
}

export default PotentialPicture
