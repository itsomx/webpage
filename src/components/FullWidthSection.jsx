import React from 'react';
import ClearFix from 'material-ui/internal/ClearFix';
import { spacing as Spacing } from 'material-ui/styles';
import StyleResizable from 'utils/styleResizable';
let DesktopGutter = Spacing.desktopGutter;

const FullWidthSection = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    contentStyle: React.PropTypes.object,
    contentType: React.PropTypes.string,
    style: React.PropTypes.object,
    useContent: React.PropTypes.bool
  },

  getDefaultProps () {
    return {
      useContent: false,
      contentType: 'div'
    };
  },

  getStyles () {
    return {
      root: {
        padding: `${DesktopGutter} px`,
        boxSizing: 'border-box'
      },
      content: {
        maxWidth: '1200px',
        margin: '0 auto'
      },
      rootWhenSmall: {
        paddingTop: DesktopGutter * 2,
        paddingBottom: DesktopGutter * 2
      },
      rootWhenLarge: {
        paddingTop: DesktopGutter * 3,
        paddingBottom: DesktopGutter * 3
      }
    };
  },

  render () {
    let {
      style,
      useContent,
      contentType,
      contentStyle,
      ...other
    } = this.props;

    let styles = this.getStyles();

    let content;
    if (useContent) {
      content =
        React.createElement(
          contentType,
          {style: Object.assign(styles.content, contentStyle)},
          this.props.children
        );
    } else {
      content = this.props.children;
    }

    return (
      <ClearFix {...other}
        style={Object.assign(
          styles.root,
          style,
          StyleResizable.isDeviceSize(StyleResizable.sizes.SMALL) && styles.rootWhenSmall,
          StyleResizable.isDeviceSize(StyleResizable.sizes.LARGE) && styles.rootWhenLarge)}>
        {content}
      </ClearFix>
    );
  }
});

export default FullWidthSection;
