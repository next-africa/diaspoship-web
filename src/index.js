// Bootstrap styles
import 'bootstrap/dist/css/bootstrap.css';

// Custom styles
import './index.css';

// React libs
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Workers
import registerServiceWorker from './registerServiceWorker';

// App imports
import App from './app/App';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
