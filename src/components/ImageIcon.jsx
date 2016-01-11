import fbIconLight from 'static/images/icons/facebook-light.png';
import twIconLight from 'static/images/icons/twitter-light.png';
import instaIconLight from 'static/images/icons/instagram-light.png';

const SIZE = {
    SMALL: '18',
    MEDIUM: '24',
    LARGE: '36',
    EXTRA_LARGE: '48'
  },
  ICON = {
    'facebook-light': fbIconLight,
    'twitter-light': twIconLight,
    'instagram-light': instaIconLight
  };

export default class ImageIcon extends React.Component {
  static SIZE = SIZE;
  static ICON = ICON;
  static propTypes = {
    icon: React.PropTypes.string,
    size: React.PropTypes.string
  };

  static defaultProps = {
    size: SIZE.MEDIUM + 'px'
  };

  render () {
    const {
      icon,
      size,
      ...other
    } = this.props;
    return (
      <img src={ICON[icon]} width={this.props.size + 'px'} {...other}/>
    );
  }
}
