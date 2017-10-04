/**
 * Created by Saul Bompart on 02-10-2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';

const app = document.getElementById('app');
ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
, app);