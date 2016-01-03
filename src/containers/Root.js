import { Provider } from 'react-redux';
import { Router } from 'react-router';
import MainTheme from '../styles/themes/MainTheme.jsx';
import MainBar from '../components/MainBar';
import Footer from '../components/Footer';
import ReactMixin from 'react-mixin';

import {Spacing} from 'material-ui/lib/styles';
import {
  StylePropable,
  StyleResizable
} from 'material-ui/lib/mixins';

import {
  Colors,
  ThemeManager
} from 'material-ui/lib/styles';

export default class Root extends React.Component {
  constructor (props) {
    super();
    this.state = {
      muiTheme: ThemeManager.getMuiTheme(),
      leftNavOpen: false
    };
    ReactMixin(this, StyleResizable);
    ReactMixin(this, StylePropable);
    this._updateDeviceSize = this._updateDeviceSize.bind(this);
    this.handleTouchTapLeftIconButton = this.handleTouchTapLeftIconButton.bind(this);
    this.handleChangeRequestLeftNav = this.handleChangeRequestLeftNav.bind(this);
    this.handleRequestChangeList = this.handleRequestChangeList.bind(this);
  }

  static propTypes = {
    children: React.PropTypes.node,
    history: React.PropTypes.object.isRequired,
    location: React.PropTypes.object,
    routes: React.PropTypes.element.isRequired,
    store: React.PropTypes.object.isRequired
  };

  // the key passed through context must be called "muiTheme"
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext () {
    return ({
      muiTheme: this.state.muiTheme
    });
  }

  getStyles () {
    const darkWhite = Colors.darkWhite;

    const styles = {
      appBar: {
        position: 'fixed',
        // Needed to overlap the examples
        zIndex: this.state.muiTheme.zIndex.appBar + 1,
        top: 0
      },
      root: {
        paddingTop: Spacing.desktopKeylineIncrement,
        minHeight: 400
      },
      content: {
        margin: Spacing.desktopGutter
      },
      contentWhenMedium: {
        margin: `${Spacing.desktopGutter * 2}px ${Spacing.desktopGutter * 3}px`
      },
      footer: {
        backgroundColor: Colors.grey900,
        textAlign: 'center'
      },
      a: {
        color: darkWhite
      },
      p: {
        margin: '0 auto',
        padding: 0,
        color: Colors.lightWhite,
        maxWidth: 335
      }
    };

    if (this.isDeviceSize(StyleResizable.statics.Sizes.MEDIUM) ||
        this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
      styles.content = this.mergeStyles(styles.content, styles.contentWhenMedium);
    }

    return styles;
  }

  componentWillMount () {
    const newMuiTheme = ThemeManager.getMuiTheme(MainTheme);
    // newMuiTheme.inkBar.backgroundColor = Colors.yellow200;
    this.setState({
      muiTheme: newMuiTheme
    });
  }

  componentWillReceiveProps (nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({
      muiTheme: newMuiTheme
    });
  }

  handleTouchTapLeftIconButton () {
    this.setState({
      leftNavOpen: !this.state.leftNavOpen
    });
  }

  handleChangeRequestLeftNav (open) {
    this.setState({
      leftNavOpen: open
    });
  }

  handleRequestChangeList (event, value) {
    this.props.history.push(value);
    this.setState({
      leftNavOpen: false
    });
  }

  get content () {
    return (
      <Router history={this.props.history}>
        {this.props.routes}
      </Router>
    );
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
    const {
      history,
      location,
      children
    } = this.props;

    let {
      leftNavOpen
    } = this.state;

    const styles = this.getStyles();

    if (this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
      leftNavOpen = true;

      styles.leftNav = {
        zIndex: styles.appBar.zIndex - 1
      };
      styles.root.paddingLeft = 256;
      styles.footer.paddingLeft = 256;
    }

    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <MainBar onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}/>
          {this.content}
          <Footer/>
          {this.devTools}
        </div>
      </Provider>
    );
  }
}
