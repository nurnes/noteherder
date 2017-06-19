import React from 'react'
import {auth, githubProvider} from './base'

const SignIn = ({ authHandler }) => {
    const authenticate = () => {
        auth.signInWithPopup(githubProvider).then(authHandler)
    }

    return(
        <button onClick={authenticate}>
            Sign In
        </button>
    )
}

export default SignIn