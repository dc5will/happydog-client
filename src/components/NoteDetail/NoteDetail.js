import React, { Component } from "react";
import NotesContext from "../../contexts/NotesContext";
import NotesApiService from "../../services/notes-api-service";
import Header from "../../components/Header/Header";
import { Section, Input, Button } from "../../components/Utils/Utils";
import './NoteDetail.css'

class NoteDetail extends Component {
  static contextType = NotesContext;

  state = {
    comments: []
  };

  submitComment = e => {
    e.preventDefault();
    const { comments } = e.target;
    const noteId = this.props.match.params.noteId;
    NotesApiService.postNewComment(noteId, comments.value)
      .then(comment =>
        this.setState({
          comments: [...this.state.comments, comment]
        })
      )
      .then(document.getElementById("commentsForm").reset());
  };

  deleteNote = note => {
    NotesApiService.deleteNote(note);
    this.context.deleteNote(note);
    this.props.history.push("/my-notes");
  };

  deleteComment = e => {
    e.preventDefault();
    const id = e.target.id;
    NotesApiService.deleteComment(id);
    console.log(id);
    const targetComment = this.state.comments.filter(
      comment => comment.id === Number(id)
    );
    const newComments = this.state.comments;
    newComments.splice(this.state.comments.indexOf(targetComment[0]), 1);
    this.setState({
      comments: newComments
    });
  };

  componentDidMount() {
    NotesApiService.getComments(Number(this.props.match.params.noteId)).then(
      comments =>
        this.setState({
          comments
        })
    );
  }

  render() {
    const comments = this.state.comments.map((comment, key) => {
      const date = new Date(comment.date_created)
      return (
        <li key={key}>
          <span className='commentDate'>Date: {(date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear()}</span>
          <span className="commentContent">{comment.content}</span>
          <button className='commentDelete' id={comment.id} onClick={e => this.deleteComment(e)}>
            x
          </button>
        </li>
      );
    });

    return (
      <React.Fragment>
        <Header />
        <Section>
          <h1>Your notes</h1>
        </Section>
        <Section>
          <h3>Comments</h3>
          <ul>{comments}</ul>
          <form className="commentsForm" onSubmit={e => this.submitComment(e)}>
            <Input id="comments" name="comments" />
            <Button type="submit">Add</Button>
            <button className='deleteNote'
              onClick={() => this.deleteNote(this.props.match.params.noteId)}
            >
              Delete note
            </button>
          </form>
        </Section>
      </React.Fragment>
    );
  }
}

export default NoteDetail;
