import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import App from './component/App';
import { TableInside } from './pages/TableInside'
import { TableOutside } from './pages/TableInside'
import { TableSmall } from './pages/TableInside'


ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/tableInsideNoLive' component={TableInside} />
        <Route path='/tableInsideLive' component={Person} />
        <Route path='/tableOutsideNoLive' component={Person} />
        <Route path='/tableOutsideLive' component={Person} />
        <Route path='/tableSmallTwo' component={Person} />
        <Route path='/tableSmallThree' component={Person} />        
      </div>
  </Router>,
  document.getElementById('root')
);


