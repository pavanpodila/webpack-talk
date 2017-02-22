import 'bootstrap/dist/css/bootstrap.css';

import ReactDOM from 'react-dom';

import {App} from './app';
import {AppContainer} from 'react-hot-loader';

const rootElt = document.querySelector('main');

render(App);

function render(Component) {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>
        , rootElt);
}

if (module.hot) {
    module.hot.accept('./app', ()=>{
        const NextApp = require('./app').App;
        render(NextApp);
    });
}