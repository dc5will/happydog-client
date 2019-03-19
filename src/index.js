import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
// import { NoteListProvider } from './contexts/NoteListContext'
// import { NoteProvider } from './contexts/NoteContext'
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);