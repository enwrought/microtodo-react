import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './modules/App';
import About from './modules/About';
import EditTask from './modules/EditTask';
import Home from './modules/Home';

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/edit/:taskId" component={ EditTask } />
    </Route>
  </Router>
), document.getElementById('app'));
