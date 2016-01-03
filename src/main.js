import createHistory from 'history/lib/createHashHistory';
import { syncReduxAndRouter } from 'redux-simple-router';
import routes from './routes';
import Root from './containers/Root';
import configureStore from './redux/configureStore';

// ----- Can go away when react 1.0 release -------------
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
// ------------------------------------------------------

const history = createHistory();
const store = configureStore(window.__INITIAL_STATE__);

syncReduxAndRouter(history, store, (state) => state.router);

// Render the React application to the DOM
ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('root')
);
