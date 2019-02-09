import React, { Component } from 'react';
import './App.css';
import Note from './note/Note';
import NoteForm from './noteForm/NoteForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        { id: 1, noteContent: 'Nota 1 aqui!' },
        { id: 2, noteContent: 'Nota 2 aqui!' },
      ],
    }
  }

  addNote = note => {
    const previousNotes = this.state.notes;
    previousNotes.push({ id: previousNotes.length + 1, noteContent: note });
    this.setState({
      notes: previousNotes,
    });
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <h1 className="heading">React and Firebase To-Do List</h1>
        </div>
        <div className="notesBody">
          {
            this.state.notes.map(note => {
              return (
                <Note noteContent={note.noteContent} noteId={note.noteId} key={note.id} />
              );
            })
          }
        </div>
        <div className="notesFooter">
          <NoteForm addNote={this.addNote} />
        </div>
      </div>
    );
  }
}

export default App;
