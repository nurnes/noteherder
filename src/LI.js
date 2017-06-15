import React, {Component} from 'react'

class LI extends Component{
    delete(){
        this.props.remove(this.props.note)
    }
    render() {
        return (
            <li>
                <div className="note">
                    <div className="note-title">
                        {this.props.note.title}
                    </div>
                    <div className="note-body">
                    <p>
                        {this.props.note.body}
                    </p>
                    </div>
                    <button className="button" onClick={this.delete.bind(this)}>Del</button>
                </div>
                
            </li>
        )
    }
}

export default LI