import React from 'react'

import PersonalInfo from './PersonalInfo'
import PotentialPicture from './PotentialPicture'
import Button from './Button'

function PotentialMatches () {
  return (
    <div className='card'>
      <div className='pic-text'>
        <PotentialPicture />
        <PersonalInfo />
      </div>
      <Button/>
    </div>
  )
}

export default PotentialMatches
