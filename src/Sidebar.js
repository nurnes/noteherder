import React from 'react'
import './General.css'
import './Sidebar.css'

import quill from './quill.svg'
import newhover from './new-hover.png'
import newo from './new.png'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="logo">
                <img src={quill} alt="Noteherder" />
            </div>
            <button className="new-note">
                <img src={newhover} alt="New note" />
                <img className="outline" src={newo} alt="New note" />
            </button>
        </div>
    )
}

export default Sidebar