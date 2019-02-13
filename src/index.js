import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

const app = React.createElement(App);
const appContainer = document.getElementById('app');

ReactDOM.render(app, appContainer);
