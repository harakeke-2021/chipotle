import React from 'react'
import { Route, Link } from 'react-router-dom'

<<<<<<< HEAD
import ChristoSmarty from './ChristoSmarty'
=======
import ChristoDummy from './ChristoDummy'
import StylesSmarty from './StylesSmarty'
import PotentialMatches from './PotentialMatches'
>>>>>>> main

const App = () => {
  return (
    <>

<<<<<<< HEAD
      <h1>WE GETTING SPICY BAYBEE</h1>
      {/* <Route path='/test' component={ChristoSmarty}/> */}
=======
      <PotentialMatches />
      <Route path='/test' component={ChristoDummy}/>
      <Route path='/styles' component={StylesSmarty} />
>>>>>>> main

    </>
  )
}

export default App
