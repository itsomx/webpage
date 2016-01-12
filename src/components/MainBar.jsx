import { Link } from 'react-router';
import AppBar from 'material-ui/lib/app-bar';
import ReactMixin from 'react-mixin';
import {
  StylePropable,
  StyleResizable
} from 'material-ui/lib/mixins';
import {
  Colors,
  ThemeManager
} from 'material-ui/lib/styles';

import Sticky from 'react-sticky';

export default class MainBar extends React.Component {
  static propTypes = {};

  constructor () {
    super();

    this.state = {
      backgroundColor: Colors.darkBlack
    };

    ReactMixin(this, StyleResizable);
    ReactMixin(this, StylePropable);
    this._updateDeviceSize = this._updateDeviceSize.bind(this);
  }

  getStyles () {
    const styles = {
      appBar: {
        position: 'relative',
        zIndex: ThemeManager.getMuiTheme().zIndex.appBar + 1,
        top: 0,
        backgroundColor: this.state.backgroundColor,
        boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.239216) 0px 1px 4px'
      },
      iconButton: {
        color: Colors.darkWhite
      },
      logo: {
        height: '50px',
        marginBottom: '-15px'
      }
    };

    return styles;
  }

  handleStickyStateChange = (shouldBeSticky) => {
    if (shouldBeSticky) {
      this.setState({
        backgroundColor: Colors.white
      });
    } else {
      this.setState({
        backgroundColor: Colors.darkBlack
      });
    }
  };

  render () {
    let showMenuIconButton = false,
      elementRight = null, // (<MainTabs/>),
      logo = 'logo',
      titleStyle = {
        textAlign: 'left'
      };

    const styles = this.getStyles();
    if (!this.isDeviceSize(StyleResizable.statics.Sizes.MEDIUM)) {
      // showMenuIconButton = true;
      elementRight = null;
      // logo = 'logo-icon';
      titleStyle.textAlign = 'center';
    }

    return (
      <Sticky onStickyStateChange={this.handleStickyStateChange}>
        <AppBar
        onLeftIconButtonTouchTap={this.props.onLeftIconButtonTouchTap}
        title={<Link to='/'><img src={logo + '.png'} style={styles.logo}/></Link>}
        zDepth={0}
        iconElementRight={elementRight}
        style={styles.appBar}
        showMenuIconButton={showMenuIconButton}
        titleStyle={titleStyle}
        />
      </Sticky>
    );
  }
}
