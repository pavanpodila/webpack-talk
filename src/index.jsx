import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';

const roolElt = document.querySelector('main');

ReactDOM.render(
    <div className="alert alert-danger">
        <h1>Hello Webpack Changed</h1>
    </div>
    ,
    roolElt
);
