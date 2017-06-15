import React, { Component } from 'react';
import './General.css'
import './App.css';

import Main from './Main'



class App extends Component {
  constructor(){
    super()
    this.state = {
            notes: [{title: "Citizens of distant epochs", body: "Sea of Tranquility the ash of stellar alchemy vastness is bearable only through love bits of moving fluff are creatures of the cosmos, consciousness a still more glorious dawn awaits two ghostly white figures in coveralls and helmets are soflty dancing tingling of the spine, concept of the number one brain is the seed of intelligence are creatures of the cosmos?"},
          {title: "Preserve and cherish that pale blue dot ", body: "network of wormholes a billion trillion the only home we've ever known light years dream of the mind's eye. Intelligent beings!"},
          {title: "Laws of physics", body: "Cambrian explosion radio telescope, circumnavigated citizens of distant epochs brain is the seed of intelligence two ghostly white figures in coveralls and helmets are soflty dancing galaxies inconspicuous motes of rock and gas"}],

          theNote: ''
        
      }
  }
  componentWillReceiveProps(nextProps) {
         this.setState({theNote: nextProps.theNote});
    }
  fetch = (note) => {
        const notes = [...this.state.notes]
        notes.unshift(note)
        this.setState({ notes })
    }
  remove(note){
        const notes = [...this.state.notes]
        for(let i=0; i<notes.length; i++){
          if(notes[i].title === note.title){
            notes.splice(i, 1)
          }
        }
        this.setState({ notes })
  }
  highlight(note){
    let isClick = this.state.isClick
    isClick = true
    let theNote = {...this.state.theNote}
    theNote = note
    this.setState({ isClick })
    if(isClick){
      this.setState({ theNote })
    }else{
      this.setState({theNote: ''})
    }
  }
  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes} fu={this.fetch} remove={this.remove.bind(this)} highlight={this.highlight.bind(this)} theNote={this.state.theNote}/>
      </div>
    );
  }
}

export default App;
