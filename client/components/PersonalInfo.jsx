import React, { useState, useEffect } from 'react'
import request from 'superagent'

function PersonalInfo () {
  const person = {
    personal: {
      name: 'Gui',
      last_name: 'Allred',
      gender: 'Female',
      age: 24,
      country: 'Germany',
      city: 'Tehran'
    },
    education: {
      certificate: 'Master',
      university: 'Boston University'
    }
  }

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
    <div>
      <h1>{person.personal.name} {person.personal.last_name}</h1>
      <p>Gender: {person.personal.gender}</p>
      <p>Age: {person.personal.age}</p>
      <p>Country: {person.personal.country}</p>
      <p>City: {person.personal.city}</p>
      <hr style={{ width: '50%' }}></hr>
      <h1>Education</h1>
      <h3>{person.education.university}</h3>
      <p>{person.education.certificate}</p>
    </div>
  )
}

export default PersonalInfo
