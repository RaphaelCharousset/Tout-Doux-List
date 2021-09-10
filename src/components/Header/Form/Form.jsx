import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewTask, saving, updateAllTasksInState, updateNewtaskInput } from '../../../actions'
import addTaskToBdd from '../../../hooks/addTaskToBdd'
import updateTaskInBdd from '../../../hooks/updateTaskInBdd'

import './Form.scss'

const Form = () => {
  const { darkMode, newTaskInput, user, tasks } = useSelector(state => state)

  const dispatch = useDispatch()

  
  const handleChange = (value) => {
    dispatch(updateNewtaskInput(value))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const undoneTasks = tasks.filter(task => !task.done)
    const doneTasks = tasks.filter(task => task.done)

    const tasksContainerInDom = document.querySelectorAll('.main__container__undone .task')
    const tasksContainer = []
    for (const task of tasksContainerInDom) {
      const foundTask = undoneTasks.find(elt => elt.id === task.id)
      updateTaskInBdd({...foundTask, order: (foundTask.order + 1)})
      tasksContainer.push({...foundTask, order: (foundTask.order + 1)})
    }
    
    const id = await addTaskToBdd(newTaskInput, user)
    updateTaskInBdd({id, title: newTaskInput, uid: user})
    dispatch(updateAllTasksInState([...tasksContainer, ...doneTasks ]))
    dispatch(addNewTask(id))
    dispatch(updateNewtaskInput(''))

    dispatch(saving())
    setTimeout(() => {
      dispatch(saving())
    }, 500);
  }

  return (
  <form
    className={darkMode ? "header--form form--dark" : "header--form form--light"}
    onSubmit={e => handleSubmit(e)}  
  >
    <label htmlFor="new-task"></label>
    <button type="submit" className="header--form__btn">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="8.5" stroke="url(#paint0_linear)"/>
        <defs>
          <linearGradient id="paint0_linear" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D4AFCD"/>
            <stop offset="1" stopColor="#355691"/>
          </linearGradient>
        </defs>
      </svg>
    </button>
    <input
      className="header--form__input"
      type="text"
      name="new-task"
      id="new-task"
      required
      placeholder="Enter new task"
      value={newTaskInput}
      onChange={e => handleChange(e.target.value)}
    />

  </form>
)}

export default Form