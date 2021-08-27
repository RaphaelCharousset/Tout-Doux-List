import React, { useState } from 'react'

const Task = React.memo( ({ id, title, done }) => {
  const [taskTile, setTaskTitle] = useState(title)
  const [editing, setEditing] = useState(false)

  const handleBlur = (e) => {
    setTaskTitle(e.target.value)
    setEditing(false)
  }

  return (
  <div className="task">
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