import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { browserHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Layout from './containers/layout';
import Phones from './containers/phones';
import Phone from './containers/phone';
import Basket from './containers/basket';

import './main.css';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>

      <Route component={Layout}>
        <Route path='/' component={Phones} />
        <Route path='/categories/:id' component={Phones} />
      </Route>

      <Route path='/phones/:id' component={Phone} />
      <Route path='/basket' component={Basket} />

    </Router>
  </Provider>,
  document.getElementById('root')
);
