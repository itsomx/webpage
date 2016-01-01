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
    width: React.PropTypes.string
  };

  static defaultProps = {
    width: size.medium + 'px'
  };

  render () {
    return (
      <img src={icons[this.props.icon]} width={this.props.size + 'px'}/>
    );
  }
}
