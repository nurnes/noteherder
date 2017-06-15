import React, {Component} from 'react'
import './General.css'
import './NoteList.css'
import LI from './LI'


class NoteList extends Component {
    render() {
      return (
          <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
              {this.props.notes.map((note, i) => <LI key={i} note={note} remove={this.props.remove} highlight={this.props.highlight} />)}
          </ul>
        </div>
      )
    }
}

export default NoteList