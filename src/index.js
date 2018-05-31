import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Help from './help/Help';

ReactDOM.render(<Router>
        <div>
            <Route path="/" exact component={App} />
            <Route path="/help" component={Help} />
        </div>
    </Router>, document.getElementById('root'));
