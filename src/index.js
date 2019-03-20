import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { library } from '@fortawesome/fontawesome-svg-core'
import './index.css';
// import { NoteListProvider } from './contexts/NoteListContext';
// import { NoteProvider } from './contexts/NoteContext';

import {
    faPenAlt,
    faTrash
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faPenAlt,
    faTrash
)

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);