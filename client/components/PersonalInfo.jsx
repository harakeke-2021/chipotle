import React, { useState, useEffect } from 'react'
import request from 'superagent'

function PersonalInfo () {
  const [info, setInfo] = useState({
    personal: {
      name: '',
      last_name: '',
      gender: '',
      age: null,
      country: '',
      city: ''
    },
    education: {
      certificate: '',
      university: ''
    }
  })

  useEffect(() => {
    request.get('/api/v1/details')
      .then(resp => {
        setInfo(resp)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  })

  return (
    <div className='text'>
      <h3 className='cardName'>{info.personal.name} {info.personal.last_name}, {info.personal.age}</h3>
      <p>{info.personal.country}, {info.personal.city}</p>
      <p>{info.education.university}</p>
    </div>
  )
}

export default PersonalInfo
