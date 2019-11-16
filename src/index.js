
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Welcome from './Welcome';

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/welcome" component={Welcome} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
