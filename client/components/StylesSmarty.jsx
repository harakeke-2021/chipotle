import React from 'react'
const dogImage = '/test.jpg'
export default function StylesSmarty() {
  return (
    <div className='container'>
      <h1>Hello world</h1>
      <div className='photo-panel'>
        <img src={dogImage} className='dog-img' alt="dog image" />
        <div className='btn-panel'>
          <button>No</button>
          <button>Yes</button>
        </div>

      </div>
      
    </div>
  )
}