import { Divider } from 'material-ui';
import ClearFix from 'material-ui/internal/ClearFix';
import coreStyles from 'styles/core.scss';
import BaseComponent from 'components/BaseComponent';
import MaterialIcon from 'components/MaterialIcon';
import StyleResizable from 'utils/styleResizable';

let getStyles = () => {
  const styles = {
    info: {
      icon: {},
      text: {},
      container: {}
    },
    tech: {
      container: {},
      img: {
        width: '100%'
      }
    }
  };

  return styles;
};
export default class TechBlock extends BaseComponent {
  constructor () {
    super({
      // listenResize: true
    });
  }

  static propTypes = {
    icon: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    style: React.PropTypes.object,
    children: React.PropTypes.node,
    align: React.PropTypes.string,
    imgLandscape: React.PropTypes.string.isRequired,
    imgPortrait: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    align: 'left',
    style: {}
  }

  render () {
    const {
      title,
      icon,
      imgLandscape,
      imgPortrait,
      style,
      ...other
    } = this.props;

    let image = imgLandscape;
    let divStyle = style;

    let {
      info,
      tech
    } = getStyles();

    let divider = <div />;
    if (StyleResizable.isDeviceSize(StyleResizable.sizes.SMALL)) {
      Object.assign(tech.img, {
        width: '75%'
      });
      image = imgPortrait;
      divStyle = Object.assign(divStyle, {
        width: '100%'
      });
      divider = (<Divider />);
    }

    return (
      <ClearFix{...other} style={
          Object.assign(divStyle, {
            padding: '0 50px 0 50px'
          })
        }>
        {divider}
        <div style={info.container}>
          <MaterialIcon icon={icon} size={MaterialIcon.SIZE.EXTRA_LARGE} background={MaterialIcon.BACKGROUND.LIGHT} style={info.icon} disabled />
          <h4 className={coreStyles['lighter']} style={info.text}>{title}</h4>
          <p style={info.text}>{this.props.children}</p>
        </div>
        <div style={tech.container}>
          <img src={image} style={tech.img} />
        </div>
      </ClearFix>
    );
  }
}
