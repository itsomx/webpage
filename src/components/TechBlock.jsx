import { ClearFix } from 'material-ui';
import coreStyles from 'styles/core.scss';
import MaterialIcon from 'components/MaterialIcon.jsx';
import ReactMixin from 'react-mixin';
import { StyleResizable } from 'material-ui/lib/mixins';
import {Divider} from 'material-ui';

const styleBlock = {
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
        height: '10em'
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
        height: '10em'
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
        width: '100%'
      },
      img: {
        float: 'none',
        height: '10em'
      }
    }
  }
};

export default class TechBlock extends React.Component {
  constructor () {
    super();

    ReactMixin(this, StyleResizable);
    this._updateDeviceSize = this._updateDeviceSize.bind(this);
  }

  static propTypes = {
    icon: React.PropTypes.string.Required,
    text: React.PropTypes.string.Required,
    title: React.PropTypes.string.Required,
    style: React.PropTypes.object,
    children: React.PropTypes.Element,
    align: React.PropTypes.string,
    imgLandscape: React.PropTypes.string.Required,
    imgPortrait: React.PropTypes.string.Required
  };

  static defaultProps = {
    align: 'left',
    style: {}
  };

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

    let {
      info,
      tech
    } = styleBlock[align];

    let divider = null;

    if (!this.isDeviceSize(StyleResizable.statics.Sizes.MEDIUM)) {
      info = styleBlock['portrait'].info;
      tech = styleBlock['portrait'].tech;
      divider = (<Divider/>);
    }

    return (
      <ClearFix>
        <div {...other} style={{padding: '0 50px 0 50px', 'width': '100%', marginTop: '30px'}}>
          {divider}
          <div style={info.container}>
            <MaterialIcon icon={icon} size={MaterialIcon.SIZE.EXTRA_LARGE} background={MaterialIcon.BACKGROUND.LIGHT} style={info.icon} disabled/>
            <h4 className={coreStyles['lighter']} style={info.text}>{title}</h4>
            <p style={info.text}>{this.props.children}</p>
          </div>
          <div style={tech.container}>
            <img src={imgLandscape} style={tech.img}/>
          </div>
        </div>
      </ClearFix>
    );
  }
}
