import React, { useState } from 'react'

import { Route } from 'react-router-dom'

import data from '../../data/fakeData'

import Header from '../Header'
import Tasks from '../Tasks'

import './App.scss'

function App() {
  //make state with data to onChange it on input in Task and in Form
	const [darkMode, setDarkMode] = useState(false)
  const [tasks, setTasks] = useState(data)

  const undoneTasks = tasks.filter(task => !task.done)
  const doneTasks = tasks.filter(task => task.done)

  return (
    <div className="App">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} setTasks={setTasks} />
      <Route exact path='/'>
        <Tasks darkMode={darkMode} undoneTasks={undoneTasks} doneTasks={doneTasks} />
      </Route>
      {/* manage props to Tasks */}
      <Route exact path='/active'>
        <Tasks darkMode={darkMode} undoneTasks={undoneTasks} doneTasks={doneTasks} />
      </Route>
      {/* manage props to Tasks */}
      <Route exact path='/completed'>
        <Tasks darkMode={darkMode} undoneTasks={undoneTasks} doneTasks={doneTasks} />
      </Route>
      {/* redirect on /all ? */}
      {/* add 404 */}
    </div>
  )
}

export default App
