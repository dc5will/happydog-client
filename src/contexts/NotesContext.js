import React, { Component} from 'react';

const NotesContext = React.createContext({
    notesList: [],
    error: null,
    setNotesList: () => {},
    setError: () => {},
    clearError: () => {},
    deleteNoteFromList: () => {}
});
export default NotesContext


export class NotesContextProvider extends Component {
    state = { 
        notesList: [],
        error: null,
    }

    setNotesList = notesList => {
        this.setState({ notesList })
    }

    setError = error => {
        console.error(error);
        this.setState({ error })
    }

    clearError = error => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            notesList: this.state.notesList,
            error: this.state.notesList,
            setNotesList: this.setNotesList,
            setError: this.setError,
            clearError: this.clearError,
        }
        return (
            <NotesContext.Provider value={value}>
                {this.props.children}
            </NotesContext.Provider>
            )
        }
    }
