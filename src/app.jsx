import React from 'react';
import reactLogo from './assets/react.jpg';
import devNexusLogo from './assets/devnexus-logo.png';

import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import {Title} from 'components/title';

export class App extends React.Component {
    state = {
        lazyLoaded: false
    };

    LazyComponent = null;

    render() {
        const {lazyLoaded} = this.state;
        const LazyComponent = this.LazyComponent;

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
                        <li>
                            {
                                lazyLoaded
                                    ? <strong>Loaded!</strong>
                                    : <button onClick={this.loadModule}>Load Lazy Component</button>
                            }

                        </li>
                    </ul>

                    {
                        lazyLoaded
                            ? <LazyComponent />
                            : null

                    }
                    <Route path={'/logo'} component={Logo}/>
                </div>
            </Router>
        );
    }

    loadModule = () => {
        require.ensure([], (require) => {
            this.LazyComponent = require('./components/lazy-component').LazyComponent;
            this.setState({lazyLoaded: true});
        });
    };
}

function Logo() {
    return (
        <div>
            <img src={reactLogo} width="512" alt="React 3D Logo"/>
            <img src={devNexusLogo}/>
        </div>
    );
}
