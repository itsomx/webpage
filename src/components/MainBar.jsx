import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import ReactMixin from 'react-mixin';
import StyleResizable from 'material-ui/utils/styleResizable';
import StylePropable from 'material-ui/utils/stylePropable';
import {
  colors as Colors,
  getMuiTheme
} from 'material-ui/styles';

import Sticky from 'react-sticky';

export default class MainBar extends React.Component {
  static propTypes = {
    style: React.PropTypes.object
  };

  constructor () {
    super();

    this.state = {
      backgroundColor: Colors.lightWhite,
      boxShadow: 'none'
    };

    ReactMixin(this, StyleResizable);
    ReactMixin(this, StylePropable);
    this.updateDeviceSize = this.updateDeviceSize.bind(this);
  }

  getStyles () {
    const styles = {
      appBar: {
        position: 'relative',
        zIndex: getMuiTheme().zIndex.appBar + 1,
        top: 0,
        backgroundColor: this.state.backgroundColor,
        boxShadow: this.state.boxShadow,
        paddingBottom: '10px',
        paddingTop: '10px'
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
        backgroundColor: Colors.fullWhite,
        boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.239216) 0px 1px 4px'
      });
    } else {
      this.setState({
        backgroundColor: Colors.lightWhite,
        boxShadow: 'none'
      });
    }
  };

  render () {
    let showMenuIconButton = false,
      elementRight = null, // (<MainTabs/>),
      logo = 'logo',
      titleStyle = {
        textAlign: 'left'
      },
      {
        style,
        ...other
      } = this.props;

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
        title={<Link to='/'><img src={logo + '.png'} style={styles.logo}/></Link>}
        zDepth={0}
        iconElementRight={elementRight}
        style={this.mergeStyles(style, styles.appBar)}
        showMenuIconButton={showMenuIconButton}
        titleStyle={titleStyle}
        />
      </Sticky>
    );
  }
}
