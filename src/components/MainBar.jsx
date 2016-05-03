import { Link } from 'react-router';
import BaseComponent from 'components/BaseComponent';
import AppBar from 'material-ui/AppBar';
import StyleResizable from 'utils/styleResizable';
import {
  colors as Colors,
  getMuiTheme
} from 'material-ui/styles';
import { Sticky } from 'react-sticky';

export default class MainBar extends BaseComponent {
  constructor () {
    super({
      // listenResize: true
    });

    this.state = {
      backgroundColor: Colors.lightWhite,
      boxShadow: 'none',
      theme: getMuiTheme()
    };
  }

  componentDidMount = () => {
    // Fix to show white background in main bar
    if (window.scrollY > 0) {
      this.onStickyStateChange(true);
    }
  }

  static propTypes = {
    style: React.PropTypes.object
  };

  static defaultProps = {
    style: {}
  };

  get styles () {
    return {
      appBar: {
        position: 'relative',
        zIndex: this.state.theme.zIndex.appBar + 1000,
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
        height: 50,
        marginBottom: -15
      }
    };
  }

  onStickyStateChange = (isSticky) => {
    if (isSticky) {
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
    let showMenuIconButton = false;
    let elementRight = null; // (<MainTabs/>);
    let logo = 'logo';
    let titleStyle = {
      textAlign: 'left'
    };
    let {
      style
    } = this.props;

    const styles = this.styles;
    if (StyleResizable.isDeviceSize(StyleResizable.sizes.SMALL)) {
      elementRight = null;
      titleStyle.textAlign = 'center';
    }

    return (
      <Sticky
        onStickyStateChange={this.onStickyStateChange}
        topOffset={0.1}
        style={{
          zIndex: styles.appBar.zIndex
        }}>
        <AppBar
          title={<Link to='/'><img src={logo + '.png'} style={styles.logo} /></Link>}
          zDepth={0}
          iconElementRight={elementRight}
          style={Object.assign(style, styles.appBar)}
          showMenuIconButton={showMenuIconButton}
          titleStyle={titleStyle} />
      </Sticky>
    );
  }
}
