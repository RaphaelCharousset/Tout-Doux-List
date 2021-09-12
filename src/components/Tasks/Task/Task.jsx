import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'; 

import { clearSingleTask, saving, toggleDoneTask, updateTaskInStateWithValue } from '../../../actions'
import deleteTaskFromBdd from '../../../hooks/deleteTaskFromBdd'
import updateTaskInBdd from '../../../hooks/updateTaskInBdd'

import './Task.scss' 

const Task = ({ id, title, done, order, draggable, index }) => {
  const dispatch = useDispatch()
  const {darkMode, user} = useSelector(state => state)

  const [taskTitle, setTaskTitle] = useState(title)
  const [editing, setEditing] = useState(false)

  const handleClick = async (e) => {
    dispatch(toggleDoneTask(e.target.closest('.task__checker').id))
    await updateTaskInBdd({id, title: taskTitle, done: !done, order, uid: user})
    dispatch(saving())
    setTimeout(() => {
      dispatch(saving())
    }, 500);
  }

  const handleBlur = async () => {
    setEditing(false)
    dispatch(updateTaskInStateWithValue(id, taskTitle))
    
    await updateTaskInBdd({id, title: taskTitle, done, order, uid: user})
    dispatch(saving())
    setTimeout(() => {
      dispatch(saving())
    }, 500);
  }

  const removeOnClick = async (e) => {
    const id = e.target.closest('.task').id;
    await deleteTaskFromBdd(id)
    dispatch(clearSingleTask(id))

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
                value={taskTitle}
                autoFocus
                onChange={e => setTaskTitle(e.target.value)}
                onBlur={e => handleBlur(e)}
              />
            ) : (
              <span
                className="task__span"
                onClick={() => setEditing(true)}  
              >
                {taskTitle}
              </span>
            )}
            <svg className="task__trash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={(e) => removeOnClick(e)}>
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
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
            value={taskTitle}
            autoFocus
            onChange={e => setTaskTitle(e.target.value)}
            onBlur={e => handleBlur(e)}
          />
        ) : (
          <span
            className="task__span"
            onClick={() => setEditing(true)}  
          >
            {taskTitle}
          </span>
        )}
        <svg className="task__trash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={(e) => removeOnClick(e)}>
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      </div>
    )
  }
}

Task.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  order: PropTypes.number.isRequired,
  draggable: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
}

export default Task