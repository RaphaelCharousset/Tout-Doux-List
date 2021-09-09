import React from 'react'

import './loginmodal.scss'

export const LoginModal = ({message, goodMsg}) => {
  return (
    <div className={goodMsg ? "login-modal good" : "login-modal bad"}>
      {message}
    </div>
  )
}