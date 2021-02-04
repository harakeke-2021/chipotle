import React from 'react'
import { Route, Link } from 'react-router-dom'

import ChristoDummy from './ChristoDummy'

const App = () => {
  return (
    <>

      <h1>WE GETTING SPICY BAYBEE</h1>
      <Route path='/test' component={ChristoDummy}/>

    </>
  )
}

export default App
