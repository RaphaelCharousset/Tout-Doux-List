import React from 'react'

const Task = React.memo( ({ title, done }) => (
  <div className="task">
    <input
      type="text"
      value={title}
    />
  </div>
))

export default Task