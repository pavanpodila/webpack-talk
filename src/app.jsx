import reactLogo from './assets/react.jpg'
import devNexusLogo from './assets/devnexus-logo.png';
import {Title} from './components/title';
import {Feature} from './feature/feature-main';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export function App() {
    if (DEV) {
        console.log('Development Time logging');
    }

    return (
        <Router>
            <div>
                <Title text="Hello Webpack Changed"/>

                <ul className="list-unstyled">
                    <li><Link to="/">Go Home</Link></li>
                    <li><Link to="/feature">Go to Feature</Link></li>
                </ul>

                <img src={reactLogo} alt="My React Logo" width={512}/>
                <img src={devNexusLogo}/>

                <Route path="/feature" component={Feature} />
            </div>
        </Router>
    );
}
