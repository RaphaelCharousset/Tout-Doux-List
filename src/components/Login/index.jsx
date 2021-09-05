import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import './login.scss'

const Login = () => {
  const dispatch = useDispatch()

  const [toggleSiginIn, setToggleSiginIn] = useState(true)
  const [toggleRegister, setToggleRegister] = useState(false)

  const handleSignInClick = () => {
    if (!toggleSiginIn) {
      setToggleSiginIn(true)
      setToggleRegister(false)
    }
  }

  const handleRegisterClick = () => {
    if (!toggleRegister) {
      setToggleRegister(true)
      setToggleSiginIn(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    //todo check if sign or register
    // if sign in, find in bdd user with email && pwd and add it in action payload and assign it in reducer
    // if register, find account with with this email
      // if no account found, create account
      // if account found, show msg
    dispatch({type: 'CONNECT'})
  }
  
  return (
    <div className="connect-modal">
      <h1 className="connect-modal__title">Tout-doux</h1>
      <div className="connect-modal__container">

        <div className="connect-modal__choice">
          <h2
            className={toggleSiginIn ? "login__title active" : "login__title"}
            onClick={() => handleSignInClick()}
          >
            <label htmlFor="email">SIGN IN</label>
          </h2>
          <h2
            className={toggleRegister ? "register__title active" : "register__title"}
            className="register__title"
            onClick={() => handleRegisterClick()}
          >
            <label htmlFor="register">REGISTER</label>
          </h2>
        </div>
          
        <div className={toggleSiginIn ? "active" : "inactive"}>
          <form
            className="connect-modal__form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              type="password"
              placeholder="Password"
            />
            <button type="submit">
              Sign In
            </button>
          </form>
        </div>       

        <div className={toggleRegister ? "active" : "inactive"}>
            <form
              className="connect-modal__form"
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                type="email"
                name="register"
                placeholder="Email"
              />
              <input
                type="password"
                placeholder="Password"
              />
              <button type="submit">
                Register
              </button>
            </form>
          </div>   
      </div>
    </div>
  )
}

export default Login