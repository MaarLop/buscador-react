import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
import Popper from 'popper.js';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();