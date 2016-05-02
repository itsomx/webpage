import { colors as Color } from 'material-ui/styles';
import { IconButton } from 'material-ui';

const SIZE = {
  SMALL: '18px',
  MEDIUM: '24px',
  LARGE: '36px',
  EXTRA_LARGE: '48px'
};
const BACKGROUND = {
  DARK: Color.white,
  LIGHT: Color.black
};

export default class MaterialIcon extends React.Component {
  static SIZE = SIZE;
  static BACKGROUND = BACKGROUND;

  static propTypes = {
    background: React.PropTypes.string,
    color: React.PropTypes.string,
    icon: React.PropTypes.string,
    inactive: React.PropTypes.bool,
    size: React.PropTypes.string,
    iconStyle: React.PropTypes.object
  };

  static defaultProps = {
    background: BACKGROUND.LIGHT,
    inactive: false,
    size: SIZE.MEDIUM,
    iconStyle: {}
  };

  render () {
    let {
      background,
      color,
      icon,
      inactive,
      size,
      iconStyle,
      ...other
    } = this.props;

    if (color) {
      color = (Color[color]) ? Color[color] : color;
    } else if (background) {
      color = background;
    }

    if (inactive) {
      color = 'rgba(255, 255, 255, 0.3)';
      if (background === BACKGROUND.LIGHT) {
        color = 'rgba(0, 0, 0, 0.26)';
      }
    }
    iconStyle.color = color;

    if (size) {
      iconStyle.fontSize = size;
    }

    return (
      <IconButton
        iconClassName='material-icons'
        size={size}
        iconStyle={iconStyle}
        disabled={inactive}
        {...other}
      >
        {icon}
      </IconButton>
    );
  }
}
