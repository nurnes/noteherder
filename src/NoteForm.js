import React, {Component} from 'react'
import './General.css'
import './NoteForm.css'


class NoteForm extends Component {
    constructor(props) {
      super(props)

      this.state = {
        note: this.blankNote(),
      }
    }
    blankNote = () => {
      return {
        title: '',
        body: '',
      }
    }
    handleSubmit(ev){
      ev.preventDefault()
      this.props.fu({title: this.state.note.title, body: this.state.note.body})
      this.props.fu(this.state.note)
      ev.currentTarget.reset()
    }

    handleChanges = (ev) => {
      const note = {...this.state.note}
      note[ev.target.name] = ev.target.value
      this.setState(
        { note }
      )
    }

    render (){
        return(
            <div className="NoteForm">
              <form onSubmit={this.handleSubmit.bind(this)}>
              <p>
                <input type="text" name="title" placeholder="Title your note" ref={(input) => this.titleField = input} onChange={this.handleChanges} value={this.state.note.title} />
              </p>
              <p>
                <textarea name="body" cols="30" rows="10" placeholder="Just start typing..." ref={(input) => this.noteField = input} onChange={this.handleChanges} value={this.state.note.body} ></textarea>
              </p>
              <p>
                <input type="submit" name="send" value="Submit" />
              </p>
            </form>   
          </div>
        )
    }
}

export default NoteForm