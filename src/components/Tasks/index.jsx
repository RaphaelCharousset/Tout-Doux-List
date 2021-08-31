import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task/Task'

import './Tasks.scss'

const Tasks = ({ undoneTasks, doneTasks }) => {
  const darkMode = useSelector(state => state.darkMode)

  return (
  <main className={ darkMode ? "main main--dark" : "main main--light" } >
    <div className="main__container">
      {
        undoneTasks
        ? <div className="main__container__undone">
            {undoneTasks.map( task => <Task key={task.id} {...task} />)}
          </div>
        : null
      }
      {
        doneTasks
        ? <div className="main__container__done">
            {doneTasks.map( task => <Task key={task.id} {...task} />)}
          </div>
        : null
      }
    </div>
  </main>
)}

export default Tasks