import React from 'react'
import Task from './Task/Task'

import './Tasks.scss'

const Tasks = ({ darkMode, undoneTasks, doneTasks }) => {

  return (
  <main className={ darkMode ? "main main--dark" : "main main--light" } >
    <div className="main__container">
      {
        undoneTasks.map( task => <Task key={task.id} {...task} darkMode={darkMode} />)
      }
      {
        doneTasks.map( task => <Task key={task.id} {...task} darkMode={darkMode} />)
      }
    </div>
  </main>
)}

export default Tasks