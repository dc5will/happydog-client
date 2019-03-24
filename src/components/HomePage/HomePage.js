import React, { Component } from "react";
import Checklist from '../../components/Checklist/Checklist'
// import AddNote from '../../components/AddNote/AddNote';
import Header from '../../components/Header/Header';
import "./HomePage.css";
import NotesContext from "../../contexts/NotesContext";
// import NotesApiService from "../../services/notes-api-service";
import ViewNotes from "../ViewNotes/ViewNotes";

export default class LandingPage extends Component {
  static contextType = NotesContext;

  // componentDidMount() {
  //   NotesApiService
  //     .getAllNotes()
  //     .then(list => this.context.setNotesList(list))
  // }

  // displayNotes = () => {
  //   return this.context.notes.map(notes => {
  //     return (
  //       <ul key={notes.id} id={notes.id}>
  //         <p>{notes.folder_name}</p>
  //       </ul>
  //     )
  //   })
  // }


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
        <section>
          <ViewNotes />
        </section>

          


      </React.Fragment>
    );
  }
}
