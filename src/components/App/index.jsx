import React, { useState } from 'react'
import './App.scss'

import data from '../../data/fakeData'

import Header from '../Header'
import Tasks from '../Tasks'

function App() {
  //make state with fakedata to onChange it on input in Task
	const [darkMode, setDarkMode] = useState(false)
  const [tasks, setTasks] = useState(data)

  return (
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} setTasks={setTasks} />
      <Tasks darkMode={darkMode} tasks={tasks} />
    </div>
  )
}

export default App
