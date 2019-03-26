import React, { Component } from "react";
import NotesContext from "../../contexts/NotesContext";
import NotesApiService from "../../services/notes-api-service";
import Header from "../../components/Header/Header";
import { Section, Input } from "../../components/Utils/Utils";
import Footer from '../../components/Footer/Footer';
import "./NoteDetail.css";

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
          <span className='commentDate'>{(date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear()}</span>
          <span id="commentContent">{comment.content}</span>
          <button
            className="commentDelete"
            id={comment.id}
            onClick={e => this.deleteComment(e)}
          >
            x
          </button>
        </li>
      )
    })


    return (
      <React.Fragment>
        <Header />
        <Section>
          <h1>Your Note</h1>
        </Section>
        <Section>
          <h3>Details</h3>
          <ul>{comments}</ul>
          <form id="commentsForm" onSubmit={e => this.submitComment(e)}>
            <Input id="comments" name="comments" />
            <button className='addButton' type="submit">Add Detail</button>
            <button
              className="deleteNote"
              onClick={() => this.deleteNote(this.props.match.params.noteId)}
            >
              Delete note
            </button>
          </form>
        </Section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default NoteDetail;
