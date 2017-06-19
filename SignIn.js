import React from 'react'

const SignIn = ({ authHandler }) => {
    const authenticate = () => {
        authHandler({
            uid: 'nurnes'
        })
    }

    return(
        <button onClick={authenticate}>
            Sign In
        </button>
    )
}

export default SignIn