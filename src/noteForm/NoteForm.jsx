import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="formWrapper">
        <input
          className="noteInput"
          placeholder="Escreva uma nova tarefa..."
        />
        <button className="noteButton">Adicionar tarefa</button>
      </div>
    )
  }
}

export default NoteForm;