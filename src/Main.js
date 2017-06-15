import React,{Component} from 'react'

import NoteForm from './NoteForm';
import Sidebar from './Sidebar'
import NoteList from './NoteList'

import './General.css'
import './Main.css'

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            notes: this.props.notes
        }
    }
    fetch(note){
        const notes = [...this.state.notes]
        notes.unshift(note)
        this.setState({ notes })
    }
    render(){
        return (
            <div className="Main">
                <Sidebar />
                <NoteList notes={this.state.notes}/>
                <NoteForm callBack={this.fetch.bind(this)}/>
            </div>
        )
    }
}

export default Main