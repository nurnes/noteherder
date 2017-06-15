import React,{Component} from 'react'

import NoteForm from './NoteForm';
import Sidebar from './Sidebar'
import NoteList from './NoteList'

import './General.css'
import './Main.css'

const Main = (props) => {
    {/*fetch(note){
        const notes = [...this.state.notes]
        notes.unshift(note)
        this.setState({ notes })
    }*/}
    return (
        <div className="Main">
            <Sidebar />
            <NoteList notes={props.notes}/>
            <NoteForm notes={props.notes} fu={props.fu}/>
        </div>
    )
}

export default Main