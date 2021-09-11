import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

import { connect } from '../../actions'

import { LoginModal } from '../LoginModal';

import './login.scss'

const Login = () => {
  const auth = getAuth();
  const dispatch = useDispatch()

  const [toggleSignIn, setToggleSignIn] = useState(true)
  const [toggleRegister, setToggleRegister] = useState(false)
  const [showModal, setShowModal] = useState(undefined)
  const [goodMsg, setGoodMsg] = useState(false)

  const handleSignInClick = () => {
    if (!toggleSignIn) {
      setToggleSignIn(true)
      setToggleRegister(false)
    }
  }

  const handleRegisterClick = () => {
    if (!toggleRegister) {
      setToggleRegister(true)
      setToggleSignIn(false)
    }
  }

  const handleSubmitSignIn = (e) => {
    e.preventDefault()
    setShowModal(undefined)
    const email = e.target[0].value
    const password = e.target[1].value

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(connect(user))
      })
      .catch((error) => {
        setGoodMsg(false)
        setShowModal("Can't sign in : verify your email and password please")
      });
  }
  
  const handleSubmitRegister = (e) => {
    e.preventDefault()
    setShowModal(undefined)
    const email = e.target[0].value
    const password = e.target[1].value

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setGoodMsg(false)
      setShowModal("This mail is already taken !")
    })
    .catch((error) => {
      // user doesn't exist so create new acocunt
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setGoodMsg(true)
          setShowModal("Account created with success ! You can sign in now")
        })
        .catch((error) => {
          setGoodMsg(false)
          setShowModal("This mail is already taken !")
        });
    })
  }

  return (
    <div className="connect-modal">
      <h1 className="connect-modal__title">Tout-doux</h1>
      <div className="connect-modal__container">

        <div className="connect-modal__choice">
          <h2
            className={toggleSignIn ? "login__title active" : "login__title"}
            onClick={() => handleSignInClick()}
          >
            <label htmlFor="email">SIGN IN</label>
          </h2>
          <h2
            className={toggleRegister ? "register__title active" : "register__title"}
            onClick={() => handleRegisterClick()}
          >
            <label htmlFor="register">REGISTER</label>
          </h2>
        </div>
          
        <div className={toggleSignIn ? "active" : "inactive"}>
          <form
            className="connect-modal__form"
            onSubmit={(e) => handleSubmitSignIn(e)}
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
              onSubmit={(e) => handleSubmitRegister(e)}
            >
              <input
                type="email"
                name="register"
                placeholder="Email"
                minLength="10"
              />
              <input
                type="password"
                placeholder="Password"
                minLength="5"
              />
              <button type="submit">
                Register
              </button>
            </form>
          </div>   
      </div>

      {showModal && <LoginModal message={showModal} goodMsg={goodMsg} />}
    </div>
  )
}

export default Login