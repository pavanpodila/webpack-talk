import React from 'react';
import reactLogo from './assets/react.jpg';
import devNexusLogo from './assets/devnexus-logo.png';

import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import {Title} from 'components/title';

export class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Title text="React App Changed"/>

                    <ul className="list-inline">
                        <li>
                            <Link to={'/'}>Go Home</Link>
                        </li>
                        <li>
                            <Link to={'/logo'}>Go to Logo</Link>
                        </li>
                    </ul>
                    <Route path={'/logo'} component={Logo}/>
                </div>
            </Router>
        );
    }

    loadModule() {
        require.ensure(['./lazy-module.js'])
    }
}

function Logo() {
    return (
        <div>
            <img src={reactLogo} width="512" alt="React 3D Logo"/>
            <img src={devNexusLogo} />
        </div>
    );
}
