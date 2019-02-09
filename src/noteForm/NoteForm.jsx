import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteContent: '',
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput = e => {
    // console.log(this);
    this.setState({
      newNoteContent: e.target.value,
    });
  }

  writeNote = () => {
    this.props.addNote(this.state.newNoteContent);
    this.setState({
      newNoteContent: '',
    })
  }

  render() {
    return (
      <div className="formWrapper">
        <input
          className="noteInput"
          placeholder="Escreva uma nova tarefa..."
          value={this.state.newNoteContent}
          onChange={this.handleUserInput}
        />
        <button
          className="noteButton"
          onClick={this.writeNote}
        >
          Adicionar tarefa
        </button>
      </div>
    )
  }
}

export default NoteForm;