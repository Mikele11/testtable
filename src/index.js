import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './component/App';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />        
      </div>
  </Router>,
  document.getElementById('root')
);

