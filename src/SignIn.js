import React from 'react'

import './SignIn.css'
import { auth, githubProvider, googleProvider } from './base'

const SignIn = () => {
  const authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }

  return (
    <div>
    <h1>Noteherder</h1>
      <h3>Not so scruffy-looking.</h3>
    <div className="si">
      
      <button
        className="SignIn"
        onClick={() => authenticate(githubProvider)}
        id="gitbutton"
      >
        Sign In With GitHub
      </button>
      <button
        className="SignIn"
        onClick={() => authenticate(googleProvider)}
        id="googlebutton"
      >
        Sign In With Google
      </button>
    </div>
    </div>
  )
}

export default SignIn
