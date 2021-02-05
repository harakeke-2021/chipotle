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
        setInfo(resp.body)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div className='photo-details'>
      <h1>{info.personal.name} {info.personal.lastName}</h1>
      <p>Gender: {info.personal.gender}</p>
      <p>Age: {info.personal.age}</p>
      <p>Country: {info.personal.country}</p>
      <p>City: {info.personal.city}</p>
      <hr style={{ width: '50%' }}></hr>
      <h1>Education</h1>
      <h3>{info.education.university}</h3>
      <p>{info.education.certificate}</p>
      <p>Job: {info.position}</p>
    </div>
  )
}

export default PersonalInfo
