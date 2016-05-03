import EnhancedButton from 'material-ui/internal/EnhancedButton';

const SIZE = {
  SMALL: '18',
  MEDIUM: '24',
  LARGE: '36',
  EXTRA_LARGE: '48'
};

export default class ImageIcon extends React.Component {
  static SIZE = SIZE;
  static propTypes = {
    img: React.PropTypes.string,
    size: React.PropTypes.string,
    link: React.PropTypes.string
  };

  static defaultProps = {
    size: SIZE.MEDIUM + 'px'
  };

  render () {
    const {
      size,
      img,
      ...other
    } = this.props;

    let linkProps = {};

    let imgRender = (
      <img src={img} width={size + 'px'} {...other} />
    );

    if (this.props.link) {
      let target = '_blank';

      Object.assign(linkProps, {
        href: this.props.link,
        target: target
      });

      imgRender = (<EnhancedButton
        ref='button'
        centerRipple={true}
        linkButton={true}
        target='_blank'
        href={this.props.link}>
          {imgRender}
      </EnhancedButton>);
    }

    return imgRender;
  }
}
