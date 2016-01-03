import fbIconLight from 'static/images/icons/facebook-light.png';
import twIconLight from 'static/images/icons/twitter-light.png';
import instaIconLight from 'static/images/icons/instagram-light.png';

const size = {
  small: '18',
  medium: '24',
  large: '36',
  extraLarge: '48'
},
icons = {
  'facebook-light': fbIconLight,
  'twitter-light': twIconLight,
  'instagram-light': instaIconLight
};

export default class ImageIcon extends React.Component {
  static size = size;
  static icons = icons;
  static propTypes = {
    icon: React.PropTypes.string,
    size: React.PropTypes.string
  };

  static defaultProps = {
    size: size.medium + 'px'
  };

  render () {
    const {
      icon,
      size,
      ...other
    } = this.props;
    return (
      <img src={icons[icon]} width={this.props.size + 'px'} {...other}/>
    );
  }
}
