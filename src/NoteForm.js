import React, {Component} from 'react'
import './General.css'
import './NoteForm.css'


class NoteForm extends Component {
    handleSubmit(ev){
      ev.preventDefault()
      this.props.fu({title: this.titleField.value, body: this.noteField.value})
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
          </div>
        )
    }
}

export default NoteForm