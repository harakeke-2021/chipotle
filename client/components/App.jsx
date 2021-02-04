import React from 'react'
import { Route, Link } from 'react-router-dom'

import ChristoDummy from './ChristoDummy'
import StylesSmarty from './StylesSmarty'
import PotentialMatches from './PotentialMatches'

const App = () => {
  return (
    <>

      <PotentialMatches />
      <Route path='/test' component={ChristoDummy}/>
      <Route path='/styles' component={StylesSmarty} />

    </>
  )
}

export default App
