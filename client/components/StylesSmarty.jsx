import React from 'react'
import dogImage from '/test'
export default function StylesSmarty() {
  return (
    <div className='container'>
      <div className='photoPanel'>
        <img src={dogImage} alt="dog image" />
      </div>
      <div className='btnPanel'>
        <button>No</button>
        <button>Yes</button>
      </div>
    </div>
  )
}