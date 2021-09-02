import React, { useState } from 'react'

import './login.scss'

const Login = () => {
  const [toggleSiginIn, setToggleSiginIn] = useState(true)
  const [toggleRegister, setToggleRegister] = useState(false)
  
  return (
    <div className="connect-modal">
      <h1 className="connect-modal__title">Tout-doux</h1>
      <div className="connect-modal__container">

        <div className="login">
          <h2 className="login__title">
            <label htmlFor="email">SIGN IN</label>
            <button onClick={() => setToggleSiginIn(old => !old)}>
              v
            </button>
          </h2>
          <form className={toggleSiginIn ? "active" : "inactive"}>
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

        <div className="register">
          <h2 className="register__title">
            <label htmlFor="register">REGISTER</label>
            <button onClick={() => setToggleRegister(old => !old)}>
              v
            </button>
          </h2>
          <form className={toggleRegister ? "active" : "inactive"}>
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