import React from 'react'
import Task from './Task/Task'

import './Tasks.scss'

const Tasks = ({ darkMode, undoneTasks, doneTasks }) => {

  return (
  <main className={ darkMode ? "main main--dark" : "main main--light" } >
    <div className="main__container">
      {
        undoneTasks
        ? <div className="main__container__undone">
            {undoneTasks.map( task => <Task key={task.id} {...task} darkMode={darkMode} />)}
          </div>
        : null
      }
      {
        doneTasks
        ? <div className="main__container__done">
            {doneTasks.map( task => <Task key={task.id} {...task} darkMode={darkMode} />)}
          </div>
        : null
      }
    </div>
  </main>
)}

export default Tasks