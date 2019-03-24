import React, { Component } from 'react';
import NotesContext from '../../contexts/NotesContext';
import Note from '../Note/Note';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Checklist from '../../components/Checklist/Checklist';


export default class ViewNotes extends Component {
    state = {
        notes: []
    }

    static contextType = NotesContext;

    createList(notes) {
        return notes.map((note, i) => <Note key={i} note={note} />)
    };

    render() {
        return (
            <React.Fragment>
                <Header/>
            <header>
                <h2>Welcome back</h2>
            </header> 
            <section>
                <Checklist />
            </section>
            <section>
            <ul>
                {this.createList(this.context.notes)}
            </ul>
            <Link to='/add-note'>
                <button>Add Note</button>
            </Link>
            </section>
            </React.Fragment>
        )
    }
}
