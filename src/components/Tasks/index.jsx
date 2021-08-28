import React from 'react'
import Task from './Task/Task'

import './Tasks.scss'

const Tasks = ({ darkMode, tasks }) => (
  <main className={ darkMode ? "main main--dark" : "main main--light" } >
    <div className="main__container">
      {
        tasks.map( task => <Task key={task.id} {...task} darkMode={darkMode} />)
      }
    </div>
  </main>
)

export default Tasks