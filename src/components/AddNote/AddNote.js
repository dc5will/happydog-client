import React, { Component } from "react";
import NotesContext from "../../contexts/NotesContext";
import NotesApiService from "../../services/notes-api-service";
import Header from "../../components/Header/Header";

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
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Title:
            <br />
            <input type="text" id="name" />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
