import React, { Component } from "react";
import NotesApiService from "../services/notes-api-service";

const NotesContext = React.createContext({
  notes: [],
  error: null,
  getNotes: () => {},
  addNotes: () => {},
  deleteNote: () => {},
  clearNotes: () => {},
  setError: () => {},
  clearError: () => {}
});
export default NotesContext;

export class NotesContextProvider extends Component {
  state = {
    notes: [],
    error: null
  };

  getNotes = () => {
    NotesApiService.getAllNotes().then(notes => {
      this.setState({
        notes
      });
    });
  };

  addNote = note => {
    this.setState({
      notes: [...this.state.notes, note]
    });
  };

  deleteNote = id => {
    const targetNote = this.state.notes.filter(note => note.id === id);
    const newNotes = this.state.notes;
    newNotes.splice(this.state.notes.indexOf(targetNote[0]), 1);
    this.setState({
      notes: newNotes
    });
  };

  clearNotes = () => {
    this.setState({
      notes: []
    });
  };

  setError = error => {
    console.error(error);
    this.setState({
      error
    });
  };

  clearError = error => {
    this.setState({
      error: null
    });
  };

  render() {
    const value = {
      notes: this.state.notes,
      error: this.state.notes,
      getNotes: this.getNotes,
      addNote: this.addNote,
      deleteNote: this.deleteNote,
      clearNotes: this.clearNotes,
      setError: this.setError,
      clearError: this.clearError,
    };

    return (
      <NotesContext.Provider value={value}>
        {" "}
        {this.props.children}{" "}
      </NotesContext.Provider>
    );
  }
}
