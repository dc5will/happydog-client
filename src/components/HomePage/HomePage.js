import React, { Component } from "react";
import Checklist from '../../components/Checklist/Checklist'
import AddNotes from '../../components/AddNotes/AddNotes';
import Header from '../../components/Header/Header';
import "./HomePage.css";

export default class LandingPage extends Component {

  componentDidMount() {
    // NotesApiService.getNotes()
      // .then(this.context.setNoteList)
      // .catch(this.context.setError)
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
            <AddNotes />

      </React.Fragment>
    );
  }
}
