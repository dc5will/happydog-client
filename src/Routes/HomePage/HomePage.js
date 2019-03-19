import React, { Component } from "react";
import Footer from '../../components/Footer/Footer'
import Checklist from '../../components/Checklist/Checklist'
import NoteList from '../../components/NoteList/NoteList'
import NotesApiService from '../../services/notes-api-service';
import NoteListContext from '../../contexts/NoteListContext';
import NoteListItem from '../../components/NoteListItem/NoteListItem';
import "./HomePage.css";

export default class LandingPage extends Component {
  static contextType = NoteListContext;

  componentDidMount() {
    this.context.clearError()
    NotesApiService.getNotes()
      .then(this.context.setNoteList)
      .catch(this.context.setError)
  }

  renderNotes() {
    const { noteList = [] } = this.context
    return noteList.map(note =>
      <NoteListItem
        key={note.id}
        note={note}
      />
    )
  }

  render() {
    return (
      <React.Fragment>
        <header>
            <h2>Welcome back</h2>
        </header>

        <section>
            <Checklist />
        </section>

        <section>
            {this.renderNotes()}
            <NoteList />
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}
