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
      hovered: false
    };
  }

  static SIZE = SIZE;
  static propTypes = {
    img: React.PropTypes.string,
    imgHover: React.PropTypes.string,
    size: React.PropTypes.string,
    link: React.PropTypes.string,
    hoverable: React.PropTypes.bool
  };

  static defaultProps = {
    size: SIZE.MEDIUM + 'px',
    hoverable: false
  };

  onMouseEnter = (event) => {
    if (this.props.hoverable) {
      this.setState({
        hovered: true
      });
      // if (this.props.onHover) this.props.onHover(event, this.props.columnNumber);
    }
  }

  onMouseLeave = (event) => {
    if (this.props.hoverable) {
      this.setState({
        hovered: false
      });
      // if (this.props.onHoverExit) this.props.onHoverExit(event, this.props.columnNumber);
    }
  }

  render () {
    const {
      size,
      img,
      imgHover,
      ...other
    } = this.props;

    const handlers = {
      // onClick: this.onClick,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    };

    let linkProps = {};

    const imgShown = this.state.hovered ? imgHover : img;

    let imgRender = (
      <img src={imgShown} width={size + 'px'} {...other} />
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
        href={this.props.link}
        {...handlers}>
          {imgRender}
      </EnhancedButton>);
    }

    return imgRender;
  }
}
