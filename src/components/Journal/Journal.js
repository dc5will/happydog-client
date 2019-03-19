import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Journal.css';

export default class Journal extends Component {
    render() {
        return (
            <header>
                <h3>Important Notes</h3>
                    <Link 
                    to='/addnote'>
                    <button>Add note</button>
                    </Link>
            </header>
        )
    }
}