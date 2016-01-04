import { Link } from 'react-router';
import AppBar from 'material-ui/lib/app-bar';
import {IconButton} from 'material-ui';
import coreStyles from 'styles/core.scss';
import MainTabs from 'components/MainTabs';
import MaterialIcon from 'components/MaterialIcon.jsx';
import ReactMixin from 'react-mixin';
import {
  StylePropable,
  StyleResizable
} from 'material-ui/lib/mixins';
import {
  Colors,
  ThemeManager
} from 'material-ui/lib/styles';

export default class MainBar extends React.Component {
  static propTypes = {};

  constructor () {
    super ();

    this.state = {};

    ReactMixin(this, StyleResizable);
    ReactMixin(this, StylePropable);
    this._updateDeviceSize = this._updateDeviceSize.bind(this);
  }

  getStyles () {
    const styles = {
      appBar: {
        position: 'relative',
        zIndex: ThemeManager.getMuiTheme().zIndex.appBar + 1,
        top: 0
      },
      iconButton: {
        color: Colors.darkWhite
      }
    };

    return styles;
  }

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
      logo = 'logo-icon';
      titleStyle.textAlign = 'center';
    }

    return (
      <AppBar
        className={coreStyles['main-bar']}
        onLeftIconButtonTouchTap={this.props.onLeftIconButtonTouchTap}
        title={<Link to='/'><img src={logo + '.png'} className={coreStyles['logo']}/></Link>}
        zDepth={0}
        iconElementRight={elementRight}
        style={styles.appBar}
        showMenuIconButton={showMenuIconButton}
        titleStyle={titleStyle}
      />
    );
  }
}
