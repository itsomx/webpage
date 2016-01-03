import Color from 'material-ui/lib/styles/colors';
import {IconButton} from 'material-ui';

const SIZE = {
  SMALL: '18px',
  MEDIUM: '24px',
  LARGE: '36px',
  EXTRA_LARGE: '48px'
},
BACKGROUND = {
  DARK: Color.white,
  LIGHT: Color.black
};

export default class MaterialIcon extends React.Component {
  static SIZE = SIZE;
  static BACKGROUND = BACKGROUND;

  static propTypes = {
    backgound: React.PropTypes.string,
    color: React.PropTypes.string,
    icon: React.PropTypes.string,
    inactive: React.PropTypes.bool,
    size: React.PropTypes.string,
    style: React.PropTypes.object
  };

  static defaultProps = {
      background: BACKGROUND.LIGHT,
      inactive: false,
      size: SIZE.MEDIUM,
      style: {}
  };

  render () {
    let {
      background,
      color,
      icon,
      inactive,
      size,
      style,
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
    style.color = color;

    if (size) {
      style.fontSize = size;
    }

    return (
      <IconButton
        iconClassName='material-icons'
        size={size}
        iconStyle={style}
        disabled={inactive}
        {...other}
      >
        {icon}
      </IconButton>
    );
  }
}
