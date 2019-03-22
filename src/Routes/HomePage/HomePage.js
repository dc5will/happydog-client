import React, { Component } from "react";
import Checklist from '../../components/Checklist/Checklist'
import NotesApiService from '../../services/notes-api-service';
import NoteFolder from '../../components/NoteFolder/NoteFolder';
import Header from '../../components/Header/Header';
import "./HomePage.css";

export default class LandingPage extends Component {

  componentDidMount() {
    NotesApiService.getNotes()
      // .then(this.context.setNoteList)
      .catch(this.context.setError)
  }


  render() {
    return (
      <React.Fragment>
        <Header/>
        <header>
            <h2>Welcome back</h2>
        </header> 

        <section>
            <Checklist />
        </section>
            <NoteFolder />

      </React.Fragment>
    );
  }
}
