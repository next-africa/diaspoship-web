// React libs
import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';

// Workers
import registerServiceWorker from './registerServiceWorker';

// App imports
import App from './app/App';
import './index.css';

addLocaleData([...en, ...fr]);
registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
