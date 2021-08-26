import React from 'react'

const Form = () => (
  <form action="" className="header--form">
    <label htmlFor="new-task"></label>
    <input type="text" name="new-task" id="new-task" />
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="8.5" stroke="url(#paint0_linear)"/>
      <defs>
        <linearGradient id="paint0_linear" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4AFCD"/>
          <stop offset="1" stopColor="#355691"/>
        </linearGradient>
      </defs>
    </svg>
  </form>
)

export default Form