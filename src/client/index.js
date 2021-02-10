/*
 *
 * index.js
 * Entrypoint for the `Chorable` web app
 *
 */ 
require('babel-polyfill');


import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
// import global css styles to render on #root


async function renderApp() {
  ReactDOM.render(<App />, document.getElementById('root'));
};

