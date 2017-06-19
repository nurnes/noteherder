import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'
import SignOut from './SignOut'
import base, { auth } from './base'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {},
      uid: null,
    }
  }

  componentWillReceiveProps(nextProps) {
         this.setState({theNote: nextProps.theNote});
    }

  componentWillMount() {
    auth.onAuthStateChanged(
      (user) => {
        if (user) {
          this.authHandler(user)
        }
      }
    )
  }

  syncNotes = () => {
    base.syncState(
      `${this.state.uid}/notes`,
      {
        context: this,
        state: 'notes',
      }
    )
  }

    setCurrentNoteId = (noteId) => {
    this.setState({ currentNoteId: noteId })
    // TODO: Make this work
  }


  removeNote = (note) => {
    const notes = {...this.state.notes}
    notes[note.id] = null
    this.setState({ notes })
  }

  saveNote = (note) => {
    console.log(note.id)
    if (!note.id) {
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({ notes })
  }

  signedIn = () => {
    return this.state.uid
  }

  authHandler = (userData) => {
    this.setState(
      { uid: userData.uid },
      this.syncNotes
    )
  }

  signOut = () => {
    auth
      .signOut()
      .then(() => this.setState({ uid: null }))
    
  }

  renderMain = () => {
    const actions = {
      saveNote: this.saveNote,
      removeNote: this.removeNote,
      setCurrentNoteId: this.setCurrentNoteId
    }
    return (
      <div>
        <SignOut signOut={this.signOut} />
        <Main notes={this.state.notes} {...actions} currentNoteId={this.state.currentNoteId}/>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        { this.signedIn() ? this.renderMain() : <SignIn /> }
      </div>
    );
  }
}

export default App;