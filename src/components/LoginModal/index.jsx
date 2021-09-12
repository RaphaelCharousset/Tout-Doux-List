import React from 'react'
import PropTypes from 'prop-types';

import './loginmodal.scss'

export const LoginModal = ({message, goodMsg}) => {
  return (
    <div className="login-modal-container">
      <div className={goodMsg ? "login-modal-container__message good" : "login-modal-container__message bad"}>
        {message}
      </div>
    </div>
  )
}

LoginModal.propTypes = {
  message: PropTypes.string.isRequired,
  goodMsg: PropTypes.bool.isRequired
}