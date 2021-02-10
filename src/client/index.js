/*
 *
 * index.js
 * Entrypoint for the `Chorable` web app
 *
 */ 
import '@babel/polyfill';


import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';


ReactDOM.render(
    <App />, 
document.getElementById('root'));

