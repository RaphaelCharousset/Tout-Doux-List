import React, { useState } from 'react'

const Task = React.memo( ({ id, title, done }) => {
  const [taskTile, setTaskTitle] = useState(title)
  const [editing, setEditing] = useState(false)

  const handleBlur = (e) => {
    setTaskTitle(e.target.value)
    setEditing(false)
  }

  return (
  <div className={done ? 'task done' : 'task'}>
  {done ? (
    // onClick, switch to done: !done
    <div className="checker">
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
    </div>
    ) : (
      // onClick, switch to done: !done
      <div className="checker">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="9" r="8.5" stroke="url(#paint0_linear)"/>
          <defs>
          <linearGradient id="paint0_linear" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D4AFCD"/>
              <stop offset="1" stopColor="#355691"/>
          </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }
    {editing ? (
      <input
        type="text"
        value={taskTile}
        autoFocus
        onChange={e => setTaskTitle(e.target.value)}
        onBlur={e => handleBlur(e)}
      />
    ) : (
      <span
        onClick={() => setEditing(true)}  
      >
        {taskTile}
      </span>
    )}
  </div>
)})

export default Task