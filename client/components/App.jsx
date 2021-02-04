import React from 'react'
import { Route, Link } from 'react-router-dom'

import ChristoDummy from './ChristoDummy'
import PotentialMatches from './PotentialMatches'
import PotentialPicture from './PotentialPicture'

const App = () => {
  return (
    <>

      <PotentialMatches />
      <PotentialPicture />
      <Route path='/test' component={ChristoDummy}/>

    </>
  )
}

export default App
