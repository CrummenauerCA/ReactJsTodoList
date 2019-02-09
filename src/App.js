import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './note/Note';

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
          <NoteForm />
        </div>
      </div>
    );
  }
}

export default App;
