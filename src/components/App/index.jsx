import React from 'react'
import { useSelector } from 'react-redux'

import { Route } from 'react-router-dom'
import { DragDropContext } from 'react-beautiful-dnd'

import Clear from '../Clear'
import Header from '../Header'
import Login from '../Login'
import { Modal } from '../Modal'
import Tasks from '../Tasks'

import './App.scss'
import updateTaskInBdd from '../../hooks/updateTaskInBdd'
import { updateAllTasksInState } from '../../actions'
import { useDispatch } from 'react-redux'

function App() {
  const {saving, tasks, user}  = useSelector(state => state)
  const dispatch = useDispatch()

  const unsortedUndoneTasks = tasks.filter(task => !task.done)
  const unsortedDoneTasks = tasks.filter(task => task.done)

  const undoneTasks = unsortedUndoneTasks ? unsortedUndoneTasks.sort((a, b) => a.order - b.order) : unsortedUndoneTasks
  const doneTasks = unsortedDoneTasks ? unsortedDoneTasks.sort((a, b) => a.order - b.order) : unsortedDoneTasks

  const onDragEnd = (e) => {

    const {destination, draggableId, source} = e

    if (!destination || destination.index === source.index) return
        
    const tasksContainerInDom = document.querySelectorAll('.main__container__undone .task')
    const tasksContainer = []

    for (const task of tasksContainerInDom) {
      const foundTask = undoneTasks.find(elt => elt.id === task.id)
      
      if (foundTask.id === draggableId) {
        tasksContainer.push({...foundTask, order: destination.index})
        updateTaskInBdd({...foundTask, order: destination.index})
      }
      else if (destination.index > source.index) {
        if (foundTask.order > source.index && foundTask.order <= destination.index) {
          tasksContainer.push({...foundTask, order: (foundTask.order - 1)})
          updateTaskInBdd({...foundTask, order: (foundTask.order - 1)})
        }
        else {
          tasksContainer.push(foundTask)
        }
      }
      else if (destination.index < source.index) {
        if (foundTask.order >= destination.index && foundTask.order < source.index) {
          tasksContainer.push({...foundTask, order: (foundTask.order + 1)})
          updateTaskInBdd({...foundTask, order: (foundTask.order + 1)})
        }
        else {
          tasksContainer.push(foundTask)
        }
      }
      else {
        tasksContainer.push(foundTask)
      }
    }

    dispatch(updateAllTasksInState([...tasksContainer, ...doneTasks]))
  }

  return (
    <div className="App">
    {
      user
      ? (
        <>
          <Header />
          <DragDropContext onDragEnd={onDragEnd}>
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
          </DragDropContext>
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
