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

addLocaleData([...en, ...fr]);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
