import React from 'react'
import {auth, githubProvider, googleProvider} from './base'

const SignIn = () => {
  const authenticate = () => {
    auth.signInWithPopup(githubProvider)
  }
  const authenticate2 = () => {
    auth.signInWithPopup(googleProvider)
  }

  return (
    <div className="signin">
      <button
        className="SignIn"
        onClick={authenticate}
      >
        Sign In With GitHub
      </button>

      <button
        className="SignIn"
        onClick={authenticate2}
      >
        Sign In With Google
      </button>
    </div>
  )
}

export default SignIn