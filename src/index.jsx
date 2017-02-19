import 'jquery';
import 'tether';
import 'bootstrap/dist/js/bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './app';
import {AppContainer} from 'react-hot-loader';

const roolElt = document.querySelector('main');

ReactDOM.render(
    <AppContainer>
        <App/>
    </AppContainer>,
    roolElt
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./app', () => {
        const NextApp = require('./app').App;
        ReactDOM.render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            roolElt
        );
    });
}
