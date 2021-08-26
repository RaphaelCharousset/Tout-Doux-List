import React from 'react'
import Task from './Task'

const Tasks = ({ tasks }) => (
  <main>
    <div className="container">
      {
        tasks.map( task => <Task key={task.id} {...task} />)
      }
    </div>
  </main>
)

export default Tasks