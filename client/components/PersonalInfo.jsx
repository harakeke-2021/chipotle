import React from 'react'

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

  return (
    <div className='photo-details'>
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
