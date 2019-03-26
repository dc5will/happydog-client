import React, { Component } from "react";
import NotesContext from "../../contexts/NotesContext";
import NotesApiService from "../../services/notes-api-service";
import Header from "../../components/Header/Header";
import { Section, Input } from "../../components/Utils/Utils";
import Footer from "../../components/Footer/Footer";

export default class AddNote extends Component {
  static contextType = NotesContext;

  handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    NotesApiService.postNote(name).then(note => this.context.addNote(note));
    this.props.history.push("/my-notes");
  };

  render() {
    return (
      <>
        <Header />
        <Section>
          <form onSubmit={e => this.handleSubmit(e)}>
            <label>
              <header>
                <h3>Task Title</h3>
              </header>
              <br />
              <Input type="text" id="name" />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </Section>
        <Footer />
      </>
    );
  }
}
