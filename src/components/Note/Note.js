import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Section } from '../../components/Utils/Utils'
import './Note.css';

export default class Note extends Component {
  render() {
    return (
      <div className='notesContainer'>
        <Link to={`/my-notes/${this.props.note.id}`}>
          <ul className='noteItem'>{this.props.note.name}</ul>
        </Link>
      </div>
    );
  }
}
