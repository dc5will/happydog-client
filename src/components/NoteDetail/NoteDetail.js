import React, { Component } from "react";
import NotesContext from "../../contexts/NotesContext";
import NotesApiService from "../../services/notes-api-service";
import Header from "../../components/Header/Header";
import { Section } from "../../components/Utils/Utils";
import Footer from "../../components/Footer/Footer";
// import { Link } from "react-router-dom";
import "./NoteDetail.css";
// import Calendar from 'react-calendar';

class NoteDetail extends Component {
  static contextType = NotesContext;

  state = {
    comments: [],
  };


  submitComment = e => {
    e.preventDefault();
    const { comments, dueDate } = e.target;
    const noteId = this.props.match.params.noteId;
    console.log(dueDate.value);
    NotesApiService.postNewComment(noteId, comments.value, dueDate.value)
      .then(comment =>
        this.setState({
          comments: [...this.state.comments, comment],
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
          comments,
        })
    );
  }

  render() {
    const comments = this.state.comments.map((comment, key) => {
      // console.log(date)
      // console.log(comment)
      // console.log(comment.duedate)
      const date = new Date(comment.duedate);
      return (
        <li className="taskList" key={key}>
          <span className='dueDate'>Due: {(date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear()}</span> - 
          <span id="commentContent">{comment.content}</span>
          <button
            className="commentDelete"
            id={comment.id}
            onClick={e => this.deleteComment(e)}
          >
            x
          </button>
        </li>
      );
    });

    return (
      <React.Fragment>
        <Header />
        <Section>
          <h1>Tasks</h1>
        </Section>
        <Section>
          <ul>{comments}</ul>
          <form id="commentsForm" onSubmit={e => this.submitComment(e)}>
            Enter Task:
            <input className="commentsInput" name="comments" />
            <br />
            Select Due Date:
            <input className='dueDate' name='dueDate'
              type="date"
              id="dueDate"
              // value={this.state.dueDate}
              // onChange={event =>
              //   this.setState({ dueDate: event.target.value })
              // }
            /> < br />
            <button className="addButton" type="submit">
              Add Task
            </button>
            <button
              className="deleteNote"
              onClick={() =>
                this.deleteNote(Number(this.props.match.params.noteId))
              }
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
