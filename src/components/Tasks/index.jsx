import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
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
          ? <Droppable droppableId={'1'}>
              {provider => (
                <div
                  {...provider.droppableProps}
                  ref={provider.innerRef}
                  className="main__container__undone"
                >
                  {undoneTasks.map((task, index) => <Task key={task.id} {...task} index={index} draggable={true} />)}
                </div>
              )}
            </Droppable>
          : null
        }
        {
          doneTasks
          ? <div className="main__container__done">
              {doneTasks.map( task => <Task key={task.id} {...task} draggable={false} />)}
            </div>
          : null
        }
    </div>
  </main>
)}

export default Tasks