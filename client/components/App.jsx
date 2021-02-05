import React from 'react'
import { Route, Link } from 'react-router-dom'

import ChristoSmarty from './ChristoSmarty'
// import StylesSmarty from './StylesSmarty'
import PotentialMatches from './PotentialMatches'

const App = () => {
  return (
    <>

      <PotentialMatches />
      <Route path='/test' component={ChristoSmarty}/>

    </>
  )
}

export default App
