import React from 'react';
import { Link } from 'react-router';
import {
  LeftNav
} from 'material-ui';
import {
  List,
  ListItem,
  MakeSelectable
} from 'material-ui/List';
import coreStyles from 'styles/core.scss';

import ReactMixin from 'react-mixin';
import StyleResizable from 'material-ui/utils/styleResizable';
import StylePropable from 'material-ui/utils/stylePropable';

const SelectableList = MakeSelectable(List);

export default class AppLeftNav extends React.Component {

  static propTypes = {
    docked: React.PropTypes.bool.isRequired,
    history: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired,
    onRequestChangeLeftNav: React.PropTypes.func.isRequired,
    onRequestChangeList: React.PropTypes.func.isRequired,
    open: React.PropTypes.bool.isRequired,
    style: React.PropTypes.object
  };

  static contextTypes = {
    muiTheme: React.PropTypes.object,
    router: React.PropTypes.func
  };

  constructor () {
    super();

    this.state = {
      open: false
    };

    ReactMixin(this, StyleResizable);
    ReactMixin(this, StylePropable);
    this._updateDeviceSize = this._updateDeviceSize.bind(this);
    this.prepareStyles = this.prepareStyles.bind(this);
  }

  handleRequestChangeLink = (event, value) => {
    window.location = value;
  }

  handleTouchTapHeader = () => {
    this.props.history.push('/');
    this.setState({
      leftNavOpen: false
    });
  }

  get styles () {
    return {
      logo: {
        textAlign: 'center'
      }
    };
  }

  render () {
    let {
      location,
      docked,
      onRequestChangeLeftNav,
      onRequestChangeList,
      open,
      style
    } = this.props;

    const styles = this.styles;
    if (this.isDeviceSize(StyleResizable.statics.Sizes.MEDIUM)) {
      open = false;
    }

    return (
      <LeftNav
        style={style}
        docked={docked}
        open={open}
        onRequestChange={onRequestChangeLeftNav}
      >
        <div
          style={this.prepareStyles(styles.logo)}
          onTouchTap={this.handleTouchTapHeader}
        >
          <Link to='/'><img src='logo-icon.png' className={coreStyles['logo']} /></Link>
        </div>
        <SelectableList
          valueLink={{
            value: location.pathname,
            requestChange: onRequestChangeList
          }}
        >
          <ListItem
            primaryText='Get Started'
          />
          <ListItem
            primaryText='Customization'
          />
          <ListItem
            primaryText='Components'
          />
        </SelectableList>
      </LeftNav>
    );
  }
}
