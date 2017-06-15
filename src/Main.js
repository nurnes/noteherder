import React,{Component} from 'react'

import NoteForm from './NoteForm';
import Sidebar from './Sidebar'
import NoteList from './NoteList'

import './General.css'
import './Main.css'

class Main extends Component {
    constructor(){
        super()
        this.state = {
            notes: [{title: "Citizens of distant epochs", body: "Sea of Tranquility the ash of stellar alchemy vastness is bearable only through love bits of moving fluff are creatures of the cosmos, consciousness a still more glorious dawn awaits two ghostly white figures in coveralls and helmets are soflty dancing tingling of the spine, concept of the number one brain is the seed of intelligence are creatures of the cosmos?"},
          {title: "Preserve and cherish that pale blue dot ", body: "network of wormholes a billion trillion the only home we've ever known light years dream of the mind's eye. Intelligent beings!"},
          {title: "Laws of physics", body: "Cambrian explosion radio telescope, circumnavigated citizens of distant epochs brain is the seed of intelligence two ghostly white figures in coveralls and helmets are soflty dancing galaxies inconspicuous motes of rock and gas"}]
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