import MainTheme from 'styles/themes/MainTheme';
import CoreLayout from 'layouts/CoreLayout';
import { getMuiTheme } from 'material-ui/styles';

export default class Root extends React.Component {
  constructor (props) {
    super();

    this.state = {
      muiTheme: getMuiTheme(),
      leftNavOpen: false
    };
  }

  static propTypes = {
    store: React.PropTypes.string
  };

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext () {
    return ({
      muiTheme: this.state.muiTheme
    });
  }

  componentWillMount = () => {
    const newMuiTheme = getMuiTheme(MainTheme);
    this.setState({
      muiTheme: newMuiTheme
    });
  }

  componentWillReceiveProps = (nextProps, nextContext) => {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({
      muiTheme: newMuiTheme
    });
  }

  get devTools () {
    if (__DEBUG__) {
      if (__DEBUG_NEW_WINDOW__) {
        if (!window.devToolsExtension) {
          require('../redux/utils/createDevToolsWindow').default(this.props.store);
        } else {
          window.devToolsExtension.open();
        }
      } else if (!window.devToolsExtension) {
        const DevTools = require('containers/DevTools').default;
        return <DevTools />;
      }
    }
  }

  render () {
    return (
      <div style={{ height: '100%' }}>
        <CoreLayout />
        {/* {this.devTools} */}
      </div>
    );
  }
}
