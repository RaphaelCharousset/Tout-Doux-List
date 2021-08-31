import React from 'react'
import { useSelector } from 'react-redux'

import { Route } from 'react-router-dom'

import Header from '../Header'
import Tasks from '../Tasks'

import './App.scss'

function App() {
  //make state with data to onChange it on input in Task and in Form
  const tasks  = useSelector(state => state.tasks)

  const undoneTasks = tasks.filter(task => !task.done)
  const doneTasks = tasks.filter(task => task.done)

  return (
    <div className="App">
        <Header />
      <Route exact path='/'>
        <Tasks undoneTasks={undoneTasks} doneTasks={doneTasks} />
      </Route>
      {/* manage props to Tasks */}
      <Route exact path='/active'>
        <Tasks undoneTasks={undoneTasks} doneTasks={null} />
      </Route>
      {/* manage props to Tasks */}
      <Route exact path='/completed'>
        <Tasks undoneTasks={null} doneTasks={doneTasks} />
      </Route>
      {/* redirect on /all ? */}
      {/* add 404 */}
    </div>
  )
}

export default App
