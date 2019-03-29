import React, { Component } from "react";
import NotesContext from "../../contexts/NotesContext";
import NotesApiService from "../../services/notes-api-service";
import Header from "../../components/Header/Header";
import { Section, Input, Button } from "../../components/Utils/Utils";
import Footer from "../../components/Footer/Footer";
import "./AddNote.css";

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

        <section className="addNoteBannerBackground">
          <header>
            <h2 className='taskBanner'>Task Title</h2>
          </header>
        </section>

        <Section>
          <form className="addTaskForm" onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor='enterTitle' className='titleLabel'>Enter Title:
              <br />
              <Input className="taskTitleInput" type="text" id="name" />
            </label>
            <br />
            <Button className="addNoteSubmit" type="submit">
              Submit
            </Button>
          </form>
        </Section>
        <Footer />
      </>
    );
  }
}
