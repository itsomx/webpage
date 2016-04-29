import {
  ClearFix,
  Divider
} from 'material-ui';
import coreStyles from 'styles/core.scss';
import MaterialIcon from 'components/MaterialIcon';
import StyleResizable from 'material-ui/utils/styleResizable';

const TechBlock = React.createClass({
  mixins: [StyleResizable],

  propTypes: {
    icon: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    style: React.PropTypes.object,
    children: React.PropTypes.element,
    align: React.PropTypes.string,
    imgLandscape: React.PropTypes.string.isRequired,
    imgPortrait: React.PropTypes.string.isRequired
  },
  getDefaultProps () {
    return {
      align: 'left',
      style: {}
    };
  },
  getStyles (align) {
    const styles = {
      left: {
        info: {
          icon: {
            float: 'left',
            textAlign: 'left'
          },
          text: {
            textAlign: 'left',
            marginLeft: '70px'
          },
          container: {
            float: 'left',
            width: '50%'
          }
        },
        tech: {
          container: {
            float: 'right',
            width: '50%'
          },
          img: {
            float: 'right',
            width: '80%'
          }
        }
      },
      right: {
        info: {
          icon: {
            float: 'right',
            textAlign: 'right'
          },
          text: {
            textAlign: 'right',
            marginRight: '45px'
          },
          container: {
            float: 'right',
            width: '50%'
          }
        },
        tech: {
          container: {
            float: 'left',
            width: '50%'
          },
          img: {
            float: 'left',
            width: '80%'
          }
        }
      },
      portrait: {
        info: {
          icon: {
            float: 'none',
            textAlign: 'center',
            margin: '0 auto'
          },
          text: {
            textAlign: 'center',
            margin: '0 auto'
          },
          container: {
            width: '100%'
          }
        },
        tech: {
          container: {
            width: '100%',
            margin: '15px 0'
          },
          img: {
            float: 'none',
            width: '80%'
          }
        }
      }
    };

    return styles[align];
  },
  render () {
    const {
      align,
      title,
      text,
      icon,
      imgLandscape,
      imgPortrait,
      ...other
    } = this.props;

    let {info, tech} = this.getStyles(align);

    let divider = null;

    if (!this.isDeviceSize(StyleResizable.statics.Sizes.MEDIUM)) {
      let stylesPortrait = this.getStyles('portrait');
      info = stylesPortrait.info;
      tech = stylesPortrait.tech;
      divider = (<Divider />);
    }

    return (
      <ClearFix>
        <div {...other} style={{
          padding: '0 50px 0 50px',
          'width': '100%',
          margin: '15px 0'
        }}>
          {divider}
          <div style={info.container}>
            <MaterialIcon icon={icon} size={MaterialIcon.SIZE.EXTRA_LARGE} background={MaterialIcon.BACKGROUND.LIGHT} style={info.icon} disabled />
            <h4 className={coreStyles['lighter']} style={info.text}>{title}</h4>
            <p style={info.text}>{this.props.children}</p>
          </div>
          <div style={tech.container}>
            <img src={imgLandscape} style={tech.img} />
          </div>
        </div>
      </ClearFix>
    );
  }
});

export default TechBlock;
