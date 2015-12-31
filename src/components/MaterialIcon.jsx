import Color from 'material-ui/lib/styles/colors';

const size = {
  small: 'md-18',
  medium: 'md-24',
  large: 'md-36',
  jumbo: 'md-48'
},
background = {
  dark: Color.white,
  light: Color.black
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
      size: size.small,
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
