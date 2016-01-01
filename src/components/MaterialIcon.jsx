import Color from 'material-ui/lib/styles/colors';
import MIStyles from 'styles/themes/material-design/material-icons.scss';

const size = {
  small: MIStyles['md-18'],
  medium: MIStyles['md-24'],
  large: MIStyles['md-36'],
  extraLarge: MIStyles['md-48']
},
background = {
  dark: MIStyles['md-light'],
  light: MIStyles['md-dark']
},
inactive = 'md-inactive';

var getClasses = (props) => {
  let classes = ['material-icons'];

  if (props.inactive) {
    classes.push(this.inactive);
  }

  if (props.background) {
    classes.push(props.background);
  }

  if (props.size) {
    classes.push(props.size);
  }

  return classes.join(' ');
}

export default class MaterialIcon extends React.Component {
  static size = size;
  static background = background;
  static inactive = inactive;

  static propTypes = {
    backgound: React.PropTypes.string,
    color: React.PropTypes.string,
    icon: React.PropTypes.string,
    inactive: React.PropTypes.bool,
    size: React.PropTypes.string,
    style: React.PropTypes.object
  };

  static defaultProps = {
      background: background.light,
      inactive: false,
      size: size.medium,
      style: {}
  };

  render () {
    let color = (Color[this.props.color]) ? Color[this.props.color] : this.props.color;

    return (
      <i
        className={getClasses(this.props)}
        color={color ? color : ''}
        style={this.props.style}
      >
        {this.props.icon}
      </i>
    );
  }
}
