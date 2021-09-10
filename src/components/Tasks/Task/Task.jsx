import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'

import { saving, toggleDoneTask } from '../../../actions'
import updateTaskInBdd from '../../../hooks/updateTaskInBdd'

import './Task.scss' 

const Task = ({ id, title, done, order, draggable, index }) => {
  const dispatch = useDispatch()
  const {darkMode, user} = useSelector(state => state)

  const [taskTile, setTaskTitle] = useState(title)
  const [editing, setEditing] = useState(false)

  const handleClick = async (e) => {
    dispatch(toggleDoneTask(e.target.closest('.task__checker').id))
    await updateTaskInBdd({id, title, done: !done, order, uid: user})
    dispatch(saving())
    setTimeout(() => {
      dispatch(saving())
    }, 500);
  }

  const handleBlur = async (e) => {
    // async func to update data and finally setEditing to false
    // switch tasks in store to save it there and avoid bug on change title before change done bool
    await setTaskTitle(e.target.value)
    setEditing(false)
    await updateTaskInBdd({id, title: taskTile, done, order, uid: user})
    dispatch(saving())
    setTimeout(() => {
      dispatch(saving())
    }, 500);
  }

  if (draggable) {
    return (
      <Draggable draggableId={id} index={index}>
        {provider => (
          <div
            {...provider.draggableProps}
            {...provider.dragHandleProps}
            ref={provider.innerRef}
            className={darkMode ? "task dark" : "task light"}
            id={id}
          >
            <div className="task__checker" id={id} onClick={(e) => handleClick(e)} data-order={order}>
              {done ? (
                <>
                  {darkMode ? (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="9" r="8.5" fill="url(#paint0_linear)" stroke="url(#paint1_linear)"/>
                      <path d="M6 9.38463L8.14112 10.7693L11.7097 8" stroke="#1E0A19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                      <linearGradient id="paint0_linear" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D4AFCD"/>
                        <stop offset="1" stopColor="#355691"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#081A39"/>
                        <stop offset="1" stopColor="#1E0A19"/>
                      </linearGradient>
                      </defs>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="9" r="8.5" fill="url(#paint0_linear)" stroke="url(#paint1_linear)"/>
                      <path d="M6.92308 9.69231L8.48077 11.0769L11.0769 8.30769" stroke="#D6DFEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="paint0_linear" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#D4AFCD"/>
                          <stop offset="1" stopColor="#355691"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#D6DFEF"/>
                          <stop offset="1" stopColor="#F0DCEC"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="8.5" stroke="url(#paint0_linear)"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D4AFCD"/>
                        <stop offset="1" stopColor="#355691"/>
                    </linearGradient>
                    </defs>
                  </svg>
              )}
            </div>
            {editing ? (
              <input
                className="task__input"
                type="text"
                value={taskTile}
                autoFocus
                onChange={e => setTaskTitle(e.target.value)}
                onBlur={e => handleBlur(e)}
              />
            ) : (
              <span
                className="task__span"
                onClick={() => setEditing(true)}  
              >
                {taskTile}
              </span>
            )}
          </div>
        )}
      </Draggable>
    )
  } else {
    return (
      <div className={darkMode ? "task dark" : "task light"} id={id}>
        <div className="task__checker" id={id} onClick={(e) => handleClick(e)}>
          {done ? (
            <>
              {darkMode ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="8.5" fill="url(#paint0_linear)" stroke="url(#paint1_linear)"/>
                  <path d="M6 9.38463L8.14112 10.7693L11.7097 8" stroke="#1E0A19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                  <linearGradient id="paint0_linear" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D4AFCD"/>
                    <stop offset="1" stopColor="#355691"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#081A39"/>
                    <stop offset="1" stopColor="#1E0A19"/>
                  </linearGradient>
                  </defs>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="8.5" fill="url(#paint0_linear)" stroke="url(#paint1_linear)"/>
                  <path d="M6.92308 9.69231L8.48077 11.0769L11.0769 8.30769" stroke="#D6DFEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D4AFCD"/>
                      <stop offset="1" stopColor="#355691"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D6DFEF"/>
                      <stop offset="1" stopColor="#F0DCEC"/>
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8.5" stroke="url(#paint0_linear)"/>
                <defs>
                <linearGradient id="paint0_linear" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D4AFCD"/>
                    <stop offset="1" stopColor="#355691"/>
                </linearGradient>
                </defs>
              </svg>
          )}
        </div>
        {editing ? (
          <input
            className="task__input"
            type="text"
            value={taskTile}
            autoFocus
            onChange={e => setTaskTitle(e.target.value)}
            onBlur={e => handleBlur(e)}
          />
        ) : (
          <span
            className="task__span"
            onClick={() => setEditing(true)}  
          >
            {taskTile}
          </span>
        )}
      </div>
    )
  }


}

export default Task