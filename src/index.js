import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './styles/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

