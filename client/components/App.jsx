import React from 'react'
import { Route, Link } from 'react-router-dom'

import ChristoDummy from './ChristoDummy'
import StylesSmarty from './StylesSmarty'

const App = () => {
  return (
    <>

      <h1>WE GETTING SPICY BAYBEE</h1>
      <Route path='/test' component={ChristoDummy}/>
      <Route path='/styles/test' component={StylesSmarty} />

    </>
  )
}

export default App
