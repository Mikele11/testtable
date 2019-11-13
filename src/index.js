import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import App from './component/App';

import { TableInside } from './pages/TableInside'
import { TableInsideLiveLine } from './pages/TableInsideLiveLine'

import { TableOutside } from './pages/TableOutside'
import { TableOutsideLiveLine } from './pages/TableOutsideLiveLine'

import { TableSmallThree } from './pages/TableSmallThree'
import { TableSmallTwo } from './pages/TableSmallTwo'


ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/tableInsideNoLive' component={TableInside} />
        <Route path='/tableInsideLive' component={TableInsideLiveLine} />
        <Route path='/tableOutsideNoLive' component={TableOutside} />
        <Route path='/tableOutsideLive' component={TableOutsideLiveLine} />
        <Route path='/tableSmallTwo' component={TableSmallTwo} />
        <Route path='/tableSmallThree' component={TableSmallThree} />        
      </div>
  </Router>,
  document.getElementById('root')
);


