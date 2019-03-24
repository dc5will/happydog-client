import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../../components/LandingPage/LandingPage'
import SignUp from '../../components/SignUp/SignUp';
import Login from '../../components/Login/Login';
// import HomePage from '../../components/HomePage/HomePage'
// import AddNotesForm from '../../components/AddNotesForm/AddNotesForm';
// import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
// import PrivateRoute from '../Utils/PrivateRoute';
import './App.css';
import NotesApiService from '../../services/notes-api-service';
import NotesContext from '../../contexts/NotesContext';
import AddNote from '../AddNote/AddNote';
// import Header from '../Header/Header';
import ViewNotes from '../../components/ViewNotes/ViewNotes';
import NoteDetail from '../../components/NoteDetail/NoteDetail';

class App extends Component {
  state = {
    notes: [],

    getNotes: () => {
      NotesApiService.getAllNotes()
        .then(notes => {
          this.setState({
            notes
          })
        })
    },

    addNote: (note) => {
      this.setState({
        notes: [...this.state.notes, note]
      })
    },

    deleteNote: (id) => {
      const targetNote = this.state.notes.filter((note) => note.id === id);
      const newNotes = this.state.notes;
      newNotes.splice(this.state.notes.indexOf(targetNote[0]), 1);
      this.setState({notes: newNotes})
    },

    clearNotes: () => {
      this.setState({notes: []})
    },

    deleteUser: () => {
      this.setState({deletedUser: true})
    },

  }

  componentDidMount () {
    this.state.getNotes()
  }

  render() {
    return (
      <div className="App">
        <NotesContext.Provider value={this.state}>
          <Route exact path = '/' component = {LandingPage} />
          <Switch>
            <Route
              path={'/login'}
              component={Login}
            />
            <Route
              path={'/register'}
              component={SignUp}
            />
            <Route
              exact path={'/my-notes'} 
              component={ViewNotes}
            />
            <Route 
              path={'/my-notes/:noteId'}
              component={NoteDetail}
            />
            <Route 
              path={'/add-note'} 
              component = {AddNote}
            />
          </Switch>
        </NotesContext.Provider>
      </div>
    );
  }
}

export default App;