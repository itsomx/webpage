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
    align: React.PropTypes.string
  }

  static defaultProps = {
    align: 'left',
    style: {}
  }

  render () {
    const {
      title,
      icon,
      style,
      ...other
    } = this.props;

    let divStyle = Object.assign({}, style, {
      padding: '0 50px'
    });

    let {
      info
    } = getStyles();

    let divider = <div />;
    if (StyleResizable.isDeviceSize(StyleResizable.sizes.SMALL)) {
      divStyle = Object.assign(divStyle, {
        width: '100%',
        padding: 0
      });
      divider = (<Divider />);
    }

    return (
      <ClearFix{...other} style={divStyle}>
        {divider}
        <div style={info.container}>
          <MaterialIcon icon={icon} size={MaterialIcon.SIZE.EXTRA_LARGE} background={MaterialIcon.BACKGROUND.LIGHT} style={info.icon} disabled />
          <h4 className={coreStyles['lighter']} style={info.text}>{title}</h4>
          <p style={info.text}>{this.props.children}</p>
        </div>
      </ClearFix>
    );
  }
}
