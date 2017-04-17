import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './modules/App';
import About from './modules/About';
import EditTask from './modules/EditTask';
import Home from './modules/Home';
import reducers from './modules/reducers';
import data from './modules/tmpData';

const store = createStore(reducers, { tasks: [] });

// console.log(store.getState());

// store.dispatch({
//   type: 'NEW_TASK',
//   taskId: '1',
//   newContent: {
//     a: 'b'
//   }
// });

data.forEach(task => {
  store.dispatch({
    type: 'NEW_TASK',
    newContent: task
  });
});

render((
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/edit/:taskId" component={ EditTask } />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
