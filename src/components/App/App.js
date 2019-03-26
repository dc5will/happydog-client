import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../components/LandingPage/LandingPage";
import Register from "../../components/Register/Register";
import Login from "../../components/Login/Login";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import PrivateRoute from "../Utils/PrivateRoute";
import "./App.css";
import NotesApiService from "../../services/notes-api-service";
import NotesContext from "../../contexts/NotesContext";
import AddNote from "../AddNote/AddNote";
import ViewNotes from "../../components/ViewNotes/ViewNotes";
import NoteDetail from "../../components/NoteDetail/NoteDetail";
import TokenService from '../../services/token-service';

class App extends Component {

  static contextType = NotesContext;

  state = {
    notes: [],

    getNotes: () => {
      NotesApiService.getAllNotes().then(notes => {
        this.setState({
          notes
        });
      });
    },

    addNote: note => {
      this.setState({
        notes: [...this.state.notes, note]
      });
    },

    deleteNote: id => {
      const targetNote = this.state.notes.filter(note => note.id === id);
      const newNotes = this.state.notes;
      newNotes.splice(this.state.notes.indexOf(targetNote[0]), 1);
      this.setState({ notes: newNotes });
    },

    clearNotes: () => {
      this.setState({ notes: [] });
    },
  };

  // NOTE: https://github.com/auth0/jwt-decode/issues/65 error
  // replicate error: make changes to pages that are not private route
  // fix error: comment out code below and uncomment and reload when on homepage
  componentDidMount() {
    this.state.getNotes();
    const user = TokenService.getUserFromToken()
    console.log(user);
    this.setState({
      user: user.full_name
    })
  }

  render() {
    return (
      <div className="App">
        <NotesContext.Provider value={this.state}>
          <Route exact path="/" component={LandingPage} />
          <Switch>
            <PublicOnlyRoute path={"/login"} component={Login} />
            <PublicOnlyRoute path={"/register"} component={Register} />
            <PrivateRoute exact path={"/my-notes"} component={ViewNotes} />
            <PrivateRoute path={"/my-notes/:noteId"} component={NoteDetail} />
            <PrivateRoute path={"/add-note"} component={AddNote} />
          </Switch>
        </NotesContext.Provider>
      </div>
    );
  }
}

export default App;
