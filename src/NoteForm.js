import React, { Component } from 'react'
import RichTextEditor from 'react-rte';

import './NoteForm.css'

class NoteForm extends Component {
  state = {
    value: RichTextEditor.createEmptyValue()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id) {
      const newId = nextProps.match.params.id

      if (newId !== this.props.currentNote.id) {
        const note = nextProps.notes[newId]
        if (note) {
          this.props.setCurrentNote(note)
          this.setState({value: RichTextEditor.createValueFromString(note.body, 'html')})
        }
      }
    } else if (this.props.currentNote.id) {
      this.props.resetCurrentNote()
    }
  }
  onChange = (value) => {
    const note = {...this.props.currentNote}
    note.body = value.toString('html')
    this.setState({ value }, () => this.props.saveNote(note))
  };

  handleChanges = (ev) => {
    const note = {...this.props.currentNote}
    note[ev.target.name] = ev.target.value
    this.props.saveNote(note)
  }

  handleRemove = (ev) => {
    this.props.removeNote(this.props.currentNote)
  }

  render() {
    return (
      <div className="NoteForm">
        <form>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              onChange={this.handleChanges}
              value={this.props.currentNote.title}
            />
          <RichTextEditor
              value={this.state.value}
              onChange={this.onChange}
            />
          <button
            type="button"
            onClick={this.handleRemove}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </form>
      </div>
    )
  }
}

export default NoteForm