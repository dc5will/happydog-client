import React, { Component } from "react";
import NotesContext from "../../contexts/NotesContext";
import Note from "../Note/Note";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Checklist from "../../components/Checklist/Checklist";
import { Button, Section } from "../../components/Utils/Utils";
import Footer from "../../components/Footer/Footer";
import './ViewNotes.css'
// import NotesApiService from "../../services/notes-api-service";

export default class ViewNotes extends Component {
  state = {
    notes: []
  };

  static contextType = NotesContext;

  createList(notes) {
    return notes.map((note, i) => <Note key={i} note={note} />);
  }

  render() {
    console.log(this.context.user);
    return (
      <React.Fragment>
        <Header />

        <section className='homepageBackground'>
          <h2 className='welcomeBanner'>Welcome back {this.context.user}!</h2>
        </section>

        <Section>
          <Checklist />
        </Section>

        <Section>
          <header>
            <h3>Important Notes</h3>
          </header>
          <Link to="/add-note">
            <Button>Add Note</Button>
          </Link>
          <ul className='notesList'>{this.createList(this.context.notes)}</ul>
        </Section>

        <Footer />
      </React.Fragment>
    );
  }
}
