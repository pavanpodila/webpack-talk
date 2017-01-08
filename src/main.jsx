import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './main.css';

import 'jquery';
import 'tether';
import 'bootstrap/dist/js/bootstrap';


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React App</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('main'));
