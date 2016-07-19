import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Router, browserHistory } from 'react-router';
// import { createHistory } from 'history';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import routes from './routes';
// import configureStore from './redux/configureStore';

// ----- Can go away when react 1.0 release -------------
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
// ------------------------------------------------------

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    routing: routerReducer
  })
);

// const store = configureStore(window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);

// syncHistoryWithStore(history, store, (state) => state.router);

// Render the React application to the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
