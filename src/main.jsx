import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React App C?hanged</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('main'));
