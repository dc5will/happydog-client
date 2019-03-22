import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { NotesContextProvider } from './contexts/NotesContext';
import './index.css';

import {
    faPenAlt,
    faTrash,
    faIgloo
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faPenAlt,
    faTrash,
    faIgloo
)

ReactDOM.render(
    <BrowserRouter>
        <NotesContextProvider>
            <App />
        </NotesContextProvider>
    </BrowserRouter>,
    document.getElementById('root')
);