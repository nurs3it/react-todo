import React from 'react';
import ReactDOM from 'react-dom';
import App from './main.settings/App';
import * as serviceWorker from './main.settings/serviceWorker';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'jquery/dist/jquery'

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// Test Heroku
serviceWorker.unregister();
