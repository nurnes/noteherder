import React, {Component} from 'react'
import './General.css'
import './NoteForm.css'
import Note from './Note'


class NoteForm extends Component {
    constructor() {
      super()
      this.state = {
        notes: []
      }
    }

    handleSubmit(ev){
      ev.preventDefault()
      const notes = [...this.state.notes]
      notes.push(`${this.titleField.value} | ${this.noteField.value}`)
      this.setState({ notes })
      ev.currentTarget.reset()
    }

    render (){
        return(
            <div className="NoteForm">
              <form onSubmit={this.handleSubmit.bind(this)}>
              <p>
                <input type="text" name="title" placeholder="Title your note" ref={(input) => this.titleField = input} />
              </p>
              <p>
                <textarea name="body" cols="30" rows="10" placeholder="Just start typing..." ref={(input) => this.noteField = input}></textarea>
              </p>
              <p>
                <input type="submit" name="send" value="Submit" />
              </p>
            </form>

            {this.state.notes.reverse().map(curr => <Note text={curr}/>)}
          </div>
        )
    }
}

export default NoteForm