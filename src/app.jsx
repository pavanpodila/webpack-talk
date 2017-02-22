import React from 'react';
import reactLogo from './assets/react.jpg'
import devNexusLogo from './assets/devnexus-logo.png';

export function App() {
    return (
        <div>
            <h1 className="alert alert-danger">Hello Webpack Changed</h1>

            <img src={reactLogo} alt="My React Logo" width={512}/>
            <img src={devNexusLogo}/>
        </div>
    );
}