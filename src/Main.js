import React from 'react'

import NoteForm from './NoteForm';
import Sidebar from './Sidebar'
import NoteList from './NoteList'

import './General.css'
import './Main.css'

const Main = (props) => {
    return (
        <div className="Main">
            <Sidebar />
            <NoteList notes={props.notes} remove={props.remove} highlight={props.highlight}/>
            <NoteForm notes={props.notes} fu={props.fu} theNote={props.theNote}/>
        </div>
    )
}

export default Main