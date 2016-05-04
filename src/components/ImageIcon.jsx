import EnhancedButton from 'material-ui/internal/EnhancedButton';

const SIZE = {
  SMALL: '18',
  MEDIUM: '24',
  LARGE: '36',
  EXTRA_LARGE: '48'
};

export default class ImageIcon extends React.Component {
  constructor () {
    super();

    this.state = {
      hovered: false,
      style: {}
    };
  }

  static SIZE = SIZE;
  static propTypes = {
    img: React.PropTypes.string,
    imgHover: React.PropTypes.string,
    size: React.PropTypes.string,
    style: React.PropTypes.object,
    link: React.PropTypes.string,
    hoverable: React.PropTypes.bool,
    onHover: React.PropTypes.func,
    onHoverExit: React.PropTypes.func
  };

  static defaultProps = {
    size: SIZE.MEDIUM + 'px',
    hoverable: false,
    style: {}
  };

  onMouseEnter = (event) => {
    if (this.props.hoverable) {
      this.setState({
        hovered: true
      });
      if (this.props.onHover) {
        this.props.onHover(event, this);
      }
    }
  }

  onMouseLeave = (event) => {
    if (this.props.hoverable) {
      this.setState({
        hovered: false
      });
      if (this.props.onHoverExit) {
        this.props.onHoverExit(event, this);
      }
    }
  }

  render () {
    const {
      size,
      img,
      imgHover,
      onHover, // eslint-disable-line no-unused-vars
      onHoverExit, // eslint-disable-line no-unused-vars
      style,
      ...other
    } = this.props;

    const handlers = {
      // onClick: this.onClick,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    };

    let imgStyle = Object.assign({}, style, this.state.style);
    if (!style.width) {
      imgStyle = Object.assign({}, style, {
        width: `${size}px`
      });
    }

    let linkProps = {};

    const imgShown = this.state.hovered && imgHover ? imgHover : img;

    let imgRender = (
      <img src={imgShown} style={imgStyle} {...other} {...handlers} />
    );

    if (this.props.link) {
      let target = '_blank';

      Object.assign(linkProps, {
        href: this.props.link,
        target: target
      });

      imgRender = (<EnhancedButton
        ref='button'
        centerRipple
        linkButton
        target='_blank'
        href={this.props.link}>
          {imgRender}
      </EnhancedButton>);
    }

    return imgRender;
  }
}
