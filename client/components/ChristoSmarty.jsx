import React, { useState, useEffect } from 'react'
import request from 'superagent'

function ChristoSmarty () {
  const ServerGet = '/api/v1/dog'

  const [dog, setDog] = useState({
    message: ''
  })

  useEffect(() => {
    request.get(ServerGet)
      .then((res) => {
        const { message } = res.body
        setDog({ message })
        console.log(res)
        return null
      })
      .catch(err => console.err(err))
  })

  return (
    <h2> it works!</h2>
  )
}

export default ChristoSmarty
