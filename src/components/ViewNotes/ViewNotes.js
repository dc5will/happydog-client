import React, { Component } from "react";
import NotesContext from "../../contexts/NotesContext";
import Note from "../Note/Note";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Checklist from "../../components/Checklist/Checklist";
import { Button, Section } from "../../components/Utils/Utils";
import Footer from "../../components/Footer/Footer";
import NotesApiService from "../../services/notes-api-service";

export default class ViewNotes extends Component {
  state = {
    notes: [],
    userName: ''
  };

  static contextType = NotesContext;

  createList(notes) {
    return notes.map((note, i) => <Note key={i} note={note} />);
  }

  render() {
    return (
      <React.Fragment>
        <Header />

        <header>
          <h2>Welcome back {this.getUserName}</h2>
        </header>

        <Section>
          <Checklist />
        </Section>

        <Section>
          <header>
            <h3>Important Notes</h3>
          </header>
          <ul>{this.createList(this.context.notes)}</ul>
          <Link to="/add-note">
            <Button>Add Note</Button>
          </Link>
        </Section>

        <Footer />
      </React.Fragment>
    );
  }
}
