import React from 'react'

import NoteForm from './NoteForm';
import Sidebar from './Sidebar'
import NoteList from './NoteList'

import './General.css'
import './Main.css'

const Main = () => {
    return (
        <div className="Main">
            <Sidebar />
            <NoteList />
            <NoteForm />
        </div>
    )
}

export default Main