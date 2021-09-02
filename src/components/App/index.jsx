import React from 'react'
import { useSelector } from 'react-redux'

import { Route } from 'react-router-dom'
import Clear from '../Clear'

import Header from '../Header'
import Login from '../Login'
import { Modal } from '../Modal'
import Tasks from '../Tasks'

import './App.scss'

function App() {
  //make state with data to onChange it on input in Task and in Form
  const {saving, tasks, user}  = useSelector(state => state)

  const undoneTasks = tasks.filter(task => !task.done)
  const doneTasks = tasks.filter(task => task.done)

  return (
    <div className="App">
    {
      user
      ? (
        <>
          <Header />
          <Route exact path='/'>
            <Tasks undoneTasks={undoneTasks} doneTasks={doneTasks} />
            <Clear />
          </Route>
          {/* manage props to Tasks */}
          <Route exact path='/active'>
            <Tasks undoneTasks={undoneTasks} doneTasks={null} />
          </Route>
          {/* manage props to Tasks */}
          <Route exact path='/completed'>
            <Tasks undoneTasks={null} doneTasks={doneTasks} />
            <Clear />
          </Route>
          {
            saving && <Modal />
          }
          {/* redirect on /all ? */}
          {/* add 404 */}
        </>
      )
      : <Login />
    }
      
    </div>
  )
}

export default App
