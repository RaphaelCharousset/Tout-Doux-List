import React, { useState } from 'react'

import './Form.scss'

const Form = ({setTasks}) => {
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setTasks(old => [...old, {
      id: Date.now(),
      title: newTaskTitle,
      done: false
    }])
    setNewTaskTitle('')
  }

  return (
  <form
    className="header--form"
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
      value={newTaskTitle}
      onChange={e => setNewTaskTitle(e.target.value)}
    />

  </form>
)}

export default Form