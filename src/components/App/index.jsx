import React, { useState } from 'react'
import Header from '../Header'
import './App.scss'

import tasksList from '../../data/fakeData'
import Tasks from '../Tasks'

function App() {
  //make state with fakedata to onChange it on input in Task

  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasksList} />
    </div>
  )
}

export default App
