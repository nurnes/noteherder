import React from 'react'

import './SignOut.css'

const SignOut = ({signOut}) => {
    return (
        <button onClick={signOut}>
            Sign Out
        </button>
    )
}

export default SignOut