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
    <div className='text'>
      <h3 className='cardName'>{person.personal.name} {person.personal.last_name}, {person.personal.age}</h3>
      <p>{person.personal.country}, {person.personal.city}</p>
      <p>{person.education.university}</p>      
    </div>
  )
}

export default PersonalInfo
