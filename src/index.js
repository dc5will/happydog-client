import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { library } from '@fortawesome/fontawesome-svg-core'
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
            <App />
    </BrowserRouter>,
    document.getElementById('root')
);