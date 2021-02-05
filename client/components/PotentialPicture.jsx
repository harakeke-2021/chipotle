import React from 'react'

function PotentialPicture() {
  const urlImg = 'https://images.dog.ceo//breeds//hound-basset//n02088238_11846.jpg'
  return (
    <div className='container'>
      <div className='photo-panel'>
        <img src={urlImg} className='dog-img'></img>
        <div className='btn-panel'>
          <button className='glow-on-hover'>No</button>
          <button className='glow-on-hover'>Yes</button>
        </div>
      </div>
    </div>
  )
}

export default PotentialPicture
