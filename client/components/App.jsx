import React from 'react'
import { Route, Link } from 'react-router-dom'

import ChristoDummy from './ChristoDummy'
import PotentialMatches from './PotentialMatches'


const App = () => {
  return (
    <>

      <PotentialMatches />
      <Route path='/test' component={ChristoDummy}/>

    </>
  )
}

export default App
