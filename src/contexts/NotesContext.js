import React, { Component } from "react";

const NotesContext = React.createContext({
  notes: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  deleteNoteFromList: () => {}
});
export default NotesContext;

export class NotesContextProvider extends Component {
  state = {
    notes: [],
    error: null
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = error => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      notes: this.state.notes,
      error: this.state.notes,
      setNotesList: this.setNotesList,
      setError: this.setError,
      clearError: this.clearError
    };
    return (
      <NotesContext.Provider value={value}>
        {this.props.children}
      </NotesContext.Provider>
    );
  }
}
